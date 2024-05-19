// Find all our documentation at https://docs.near.org
import { NearBindgen, near, call, view, initialize, assert, NearPromise } from 'near-sdk-js';
import { AccountId } from 'near-sdk-js/lib/types';

interface TaskType {
  service: string;
  by: string;
  pay: number;
}

interface AcceptedTaskType {
  service: string;
  by: string;
  pay: number;
  acceptedBy: AccountId;
}

@NearBindgen({ requireInit: true})
class UserContract {

  @initialize({privateFunction: true})
  init({}) {
    this.tasks = []
    this.acceptedTasks = []
  }

  tasks : TaskType[] = [];
  acceptedTasks: AcceptedTaskType[] = [];

  @call({})
  accept_service({service, by}: {service: string, by: string}) {
    // Move the task from tasks to acceptedTasks
    let service_idx = 0;
    for(let i = 0; i < this.tasks.length; i++) {
      if(this.tasks[i].service == service && this.tasks[i].by == by) {
        service_idx = i;
        break;
      }
    }
    const task = this.tasks[service_idx];
    near.log(task.service + " requested " + task.by + "accepted by" + near.predecessorAccountId());
    const acceptedTask = {
      service: task.service,
      by: task.by,
      pay: task.pay,
      acceptedBy: near.predecessorAccountId() // append the acceptor's account id
    }

    this.acceptedTasks.push(acceptedTask);
    this.tasks.splice(service_idx, 1);
  }

  @call({})
  complete_service({service, by}: {service: string, by: string}) {
    let service_idx = 0;
    for(let i = 0; i < this.acceptedTasks.length; i++) {
      if(this.acceptedTasks[i].service == service && this.acceptedTasks[i].by == by) {
        service_idx = i;
        break;
      }
    }

    // transfer the funds to the acceptor
    NearPromise.new(this.acceptedTasks[service_idx].acceptedBy)
                .transfer(BigInt(this.acceptedTasks[service_idx].pay));

    near.log("Transfered " + this.acceptedTasks[service_idx].pay.toString() 
                            + " to " 
                            + this.acceptedTasks[service_idx].acceptedBy);

    // Delete the task from acceptedTasks
    this.acceptedTasks.splice(service_idx, 1);
  }

  @call({})
  delete_service({service, by}: {service: string, by: string}) {
    // Delete the task from acceptedTasks
    let delete_idx = 0;
    for(let i = 0; i < this.tasks.length; i++) {
      if(this.tasks[i].service == service && this.tasks[i].by == by) {
        delete_idx = i;
        break;
      }
    }
    this.tasks.splice(delete_idx, 1);
  }

  @call({})
  clear_all({}) {
    this.tasks = [];
    this.acceptedTasks = [];
  }

  @call({payableFunction: true})
  add_service({service, by, pay}: TaskType) {

      const deposit = near.attachedDeposit();
      near.log(deposit.toString() + " funds pushed to the contract");

      const newTask: TaskType = {
        service: service,
        by: by,
        pay: pay
      };
      this.tasks.push(newTask);
    }

  @view({})
  get_services() : TaskType[] {
      return this.tasks
    }

  @view({})
  get_accepted_services() : TaskType[] {
      return this.acceptedTasks
    }
}