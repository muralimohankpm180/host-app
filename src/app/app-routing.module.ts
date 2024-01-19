import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"",redirectTo:'/HomeModule', pathMatch:"full"
  },
  {
    path:'HomeModule',
    loadChildren:()=>{
      return loadRemoteModule({
        remoteEntry:'http://localhost:4300/remoteEntry.js',
        remoteName:"remoteApp",
        exposedModule:'./HomeModule'
      }).then(m=>m.HomeModule).catch(err=>console.log(err))
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
