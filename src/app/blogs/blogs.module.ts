import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogsListComponent } from './blogs-list/blogs-list.component';



@NgModule({
  declarations: [
    BlogsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [BlogsListComponent]
})
export class BlogsModule { }
