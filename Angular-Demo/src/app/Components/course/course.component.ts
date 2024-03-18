
// liste-de-courses.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'app-liste-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})


export class CourseComponent {
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