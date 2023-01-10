import { Component, OnInit } from '@angular/core';
import { EditorService } from '../editor/editor.service';
import { Question } from '../models/question.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent implements OnInit {
  questionId: number = 0;
  question: Question = new Question();
  statusMessage: string = '';

  fetchedQuestion: Question = new Question();

  testString: string = '<p></p>';

  constructor(private editorService: EditorService) {}

  ngOnInit() {}

  submitId(): void {
    console.log(this.questionId);
    this.question.id = this.questionId;
    this.editorService.getUsersById(this.question).subscribe(
      (data) => {
        if (data == null) {
          this.statusMessage =
            'Question with the specified Question Id does not exist';
        } else {
          this.fetchedQuestion = data;
          this.testString = this.fetchedQuestion.content!;
          // console.log(this.fetchedQuestion.content);
        }
      },
      (error) => {
        this.statusMessage =
          'Problem with the service. Please try again after sometime';
        console.error(error);
      }
    );
  }
}
