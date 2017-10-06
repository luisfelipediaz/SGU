import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import { Task } from '../../app/data-model';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TaskProvider {

  taskCollection = this.fs.collection<Task>('/tasks');

  constructor(public fs: AngularFirestore) {

  }

  pushTask(task: Task): Promise<any> {
    task.id = task.id || this.fs.createId();
    return this.taskCollection.doc(task.id).set(task);
  }

  getTasks(): Observable<{ added: Task[], removed: Task[], modified: Task[] }> {
    return this.taskCollection.stateChanges(["added", "removed", "modified"]).map(tasks => {
      return {
        added: tasks.filter(task => task.type === "added").map(task => {
          return {
            ...task.payload.doc.data()
          } as Task
        }),
        removed: tasks.filter(task => task.type === "removed").map(task => {
          return {
            ...task.payload.doc.data()
          } as Task
        }),
        modified: tasks.filter(task => task.type === "modified").map(task => {
          return {
            ...task.payload.doc.data()
          } as Task
        })
      }
    });
  }

}
