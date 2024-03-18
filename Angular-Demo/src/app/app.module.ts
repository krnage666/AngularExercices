import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { ExerciceComponent } from './Components/exercice/exercice.component';
import { TestComponent } from './Components/test/test.component';
import { FormsModule } from '@angular/forms';
import { MyFormComponent } from './Components/my-form/my-form.component';
import { AddItemComponent } from './Components/add-item/add-item.component';
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component';
import { FriendsComponent } from './Components/friends/friends.component';
import { CourseComponent } from './Components/course/course.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ExerciceComponent,
    TestComponent,
    MyFormComponent,
    ShoppingListComponent,
    AddItemComponent,
    FriendsComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
