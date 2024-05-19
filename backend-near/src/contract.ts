// Find all our documentation at https://docs.near.org
import { NearBindgen, near, call, view, initialize, assert } from 'near-sdk-js';

interface TaskType {
  username: string;
  userAddress: string;
  taskTitle: string;
  taskDescription: string;
  cost: number;
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
  use_service({username, taskTitle}: {username: string, taskTitle: string}) {
    // Move the task from tasks to acceptedTasks
    let service_idx = 0;
    for(let i = 0; i < this.tasks.length; i++) {
      if(this.tasks[i].username == username && this.tasks[i].taskTitle == taskTitle) {
        service_idx = i;
        break;
      }
    }
    this.acceptedTasks.push(this.tasks[service_idx]);
    this.tasks.splice(service_idx, 1);
  }

  @call({})
  complete_service({username, taskTitle}: {username: string, taskTitle: string}) {
    // Delete the task from acceptedTasks
    let delete_idx = 0;
    for(let i = 0; i < this.acceptedTasks.length; i++) {
      if(this.acceptedTasks[i].username == username && this.acceptedTasks[i].taskTitle == taskTitle) {
        delete_idx = i;
        break;
      }
    }
    this.acceptedTasks.splice(delete_idx, 1);
  }

  @call({})
  delete_service({username, taskTitle}: {username: string, taskTitle: string}) {
    // Delete the task from acceptedTasks
    let delete_idx = 0;
    for(let i = 0; i < this.tasks.length; i++) {
      if(this.tasks[i].username == username && this.tasks[i].taskTitle == taskTitle) {
        delete_idx = i;
        break;
      }
    }
    this.tasks.splice(delete_idx, 1);
  }

  @call({payableFunction: true})
  add_service({username, userAddress, taskTitle, taskDescription, cost}: TaskType) {

      const bid = near.attachedDeposit()

      const newTask: TaskType = {
        username: username,
        userAddress: userAddress,
        taskTitle: taskTitle,
        taskDescription: taskDescription,
        cost: cost
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