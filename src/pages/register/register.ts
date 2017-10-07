import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Task } from '../../app/data-model';
import { TaskProvider } from '../../providers/task/task';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  task: Task;

  formTask: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public taskProvider: TaskProvider) {

      if(!!navParams.data.task) this.task = navParams.data.task as Task;

    this.task = this.task || new Task();
    this.createForm();
  }

  createForm(): any {
    this.formTask = this.formBuilder.group({
      name: [ this.task.name, Validators.required ],
      delivery: [ this.task.delivery, Validators.required ],
      priority: [ this.task.priority, Validators.required ],
      optimistic: [ this.task.optimistic, Validators.required ],
      probable: [ this.task.probable, Validators.required ],
      pessimistic: [ this.task.pessimistic, Validators.required ],
      description: [ this.task.description ]
    });
  }

  save() {
    this.task = this.prepareTask();
    this.taskProvider.pushTask(this.task);

    this.formTask.reset({
      name: '',
      description: ''
    });
    this.task.id = null;

    if(!!this.navParams.data.task) this.navCtrl.pop();
  }

  prepareTask(): Task {
    let formTask = this.formTask.value;

    return {
      id: this.task.id,
      name: formTask.name as string,
      description: formTask.description as string,
      priority: formTask.priority as string,
      delivery: formTask.delivery as string,
      optimistic: +formTask.optimistic,
      probable: +formTask.probable,
      pessimistic: +formTask.pessimistic
    } as Task;
  }

}