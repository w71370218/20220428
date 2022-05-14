import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PostListComponent } from '../post-list/post-list.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
    PostListComponent,
    NavBarComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [HomeComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule { }
