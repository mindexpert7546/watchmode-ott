import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MvlistComponent } from './mvlist/mvlist.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { TodoTaskComponent } from './todo-task/todo-task.component';


const routes: Routes = [
 { path:'', component:MvlistComponent},
 { path:'about', component:AboutComponent},
 { path:'contactus', component:ContactusComponent},
 { path: 'todoTask', component:TodoTaskComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
