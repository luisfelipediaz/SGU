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



  task: Task = {
    id: null,
    name: '',
    description: '',
    priority: "M",
    delivery: (new Date()).toISOString()
  }

  formTask: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public taskProvider: TaskProvider) {
    this.createForm();
  }

  createForm(): any {
    this.formTask = this.formBuilder.group({
      name: [this.task.name, Validators.required],
      delivery: [this.task.delivery, Validators.required],
      priority: [this.task.priority, Validators.required],
      description: [this.task.description]
    });
  }

  ionViewDidLoad() {

  }

  save() {
    let formTask = this.formTask.value;

    this.task.name = formTask.name as string;
    this.task.description = formTask.description as string;
    this.task.priority = formTask.priority as string;
    this.task.delivery = formTask.delivery as string;

    this.taskProvider.pushTask(this.task).then(() => {
      this.formTask.reset();
      this.task.id = null;
    });
  }

}