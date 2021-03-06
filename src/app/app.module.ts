import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { ChildTaskComponent } from './tasks/child-task/child-task.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ChildTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
