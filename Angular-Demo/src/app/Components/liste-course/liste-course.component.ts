
// liste-de-courses.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-liste-course',
  templateUrl: './liste-course.component.html',
  styleUrls: ['./liste-course.component.css']
})


export class ListeDeCoursesComponent {
  @Input() courses: string[] = [];
  @Output() courseAdded = new EventEmitter<string>();
  @Output() courseRemoved = new EventEmitter<number>();

  newCourse: string = '';

  addCourse() {
    if (this.newCourse.trim() !== '') {
      this.courseAdded.emit(this.newCourse.trim());
      this.newCourse = '';
    }
  }

  removeCourse(index: number) {
    this.courseRemoved.emit(index);
  }
}