// Find all our documentation at https://docs.near.org
import { NearBindgen, near, call, view, initialize, assert } from 'near-sdk-js';

interface TaskType {
  service: string;
  by: string;
  pay: number;
}

@NearBindgen({ requireInit: true})
class UserContract {

  @initialize({privateFunction: true})
  init({}) {
    this.tasks = []
    this.acceptedTasks = []
  }

  tasks : TaskType[] = [];
  acceptedTasks: TaskType[] = [];

  @call({})
  use_service({service, by}: {service: string, by: string}) {
    // Move the task from tasks to acceptedTasks
    let service_idx = 0;
    for(let i = 0; i < this.tasks.length; i++) {
      if(this.tasks[i].service == service && this.tasks[i].by == by) {
        service_idx = i;
        break;
      }
    }
    this.acceptedTasks.push(this.tasks[service_idx]);
    this.tasks.splice(service_idx, 1);
  }

  @call({})
  complete_service({service, by}: {service: string, by: string}) {
    // Delete the task from acceptedTasks
    let delete_idx = 0;
    for(let i = 0; i < this.acceptedTasks.length; i++) {
      if(this.acceptedTasks[i].service == service && this.acceptedTasks[i].by == by) {
        delete_idx = i;
        break;
      }
    }
    this.acceptedTasks.splice(delete_idx, 1);
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

      const bid = near.attachedDeposit()

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