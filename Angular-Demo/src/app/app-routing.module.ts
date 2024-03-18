import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './Components/navigation/navigation.component';
import { ExerciceComponent } from './Components/exercice/exercice.component';
import { TestComponent } from './Components/test/test.component';
import { MyFormComponent } from './Components/my-form/my-form.component';
import { AddItemComponent } from './Components/add-item/add-item.component';
import { ShoppingListComponent } from './Components/shopping-list/shopping-list.component';
import { FriendsComponent } from './Components/friends/friends.component';
import { CourseComponent } from './Components/course/course.component';


const routes: Routes = [
  {path: 'Exercices', component: ExerciceComponent},
  {path: 'Test', component: TestComponent},
  {path: 'Form', component: MyFormComponent},
  {path: 'add-item', component: AddItemComponent },
  {path: 'shopping-list', component: ShoppingListComponent },
  {path: 'Friends', component: FriendsComponent },
  {path: 'Course', component: CourseComponent },
  {path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

