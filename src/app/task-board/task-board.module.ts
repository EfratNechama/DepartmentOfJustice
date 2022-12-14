import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule, MatExpansionModule, MatButtonModule
  ],
  exports: [UserListComponent, MatExpansionModule, MatButtonModule]
})
export class TaskBoardModule { }
