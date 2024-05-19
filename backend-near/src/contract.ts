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
    this.acceptedTasks.push(this.tasks.filter(task => 
      task.username == username && task.taskTitle == taskTitle)[0])
  }

  @call({})
  complete_service({username, taskTitle}: {username: string, taskTitle: string}) {
    let j = 0
    for(let i = 0; i < this.acceptedTasks.length; i++) {
      if(this.acceptedTasks[i].username == username && this.acceptedTasks[i].taskTitle == taskTitle) {
        j = i 
        this.acceptedTasks.splice(j, 1)
        break
      }
    }
  }

  @call({})
  delete_service({username, taskTitle}: {username: string, taskTitle: string}) {
    this.tasks = this.tasks.filter(task => task.username !== username && task.taskTitle !== taskTitle)
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
}