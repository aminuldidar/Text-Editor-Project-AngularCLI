import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { EditorService } from './editor.service';
import { Question } from '../models/question.model';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  question: Question = new Question();
  showSourceCode: boolean = false;
  isInEditMode: boolean = true;

  doc: any = null;
  docString: string = '';

  constructor(
    private editorService: EditorService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.doc = document.getElementById('myEditor');
    this.doc.contentEditable = 'true';
  }

  execCmd(command: any) {
    document.execCommand(command, false, '');
  }

  execCmdWithArg(command: any, event: any) {
    document.execCommand(command, false, event.target.value);
  }
  

  toggleSource() {
    console.log('Inside toggleSource..', this.showSourceCode);
    if (this.showSourceCode) {
      this.doc.innerHTML = this.doc.textContent;
      this.showSourceCode = false;
    } else {
      console.log(this.doc.innerHTML);
      this.doc.textContent = this.doc.innerHTML;
      this.showSourceCode = true;
    }
  }

  toggleEdit() {
    console.log('toggle edit not active..');
    if (this.isInEditMode) {
      this.doc.contentEditable = 'false';
      this.isInEditMode = false;
    } else {
      this.doc.contentEditable = 'true';
      this.isInEditMode = true;
    }
  }

  submitForm(): void {
    this.question.firstName = 'Funny';
    this.question.lastName = 'Guy';
    this.question.email = 'funny@gmail.com';
    this.question.content = this.doc.innerHTML;
    this.editorService.createQuestion(this.question).subscribe((data) => {
      alert('User created successfully.');
    });
  }

  /*Image processing*/
  execCmdImgArg(command: any, fileInput: any) {
    // console.log( URL.createObjectURL(fileInput.target.files[0]));
    //document.execCommand(command,false,null);
    console.log(fileInput.target.files[0]);
    //"file:///C:/Users/Sophomore/Pictures/test.png"
    let imgSrc = document.createElement('img');
    imgSrc.height = 100;
    imgSrc.width = 50;
    imgSrc.src = window.URL.createObjectURL(fileInput.target.files[0]);
    //document.execCommand(command,false,'file:///C:/Users/Sophomore/Pictures/test.png');

    //this.doc.execCommand(command, false, imgSrc.src);
    //let img: any = imgSrc.innerHTML;
    // console.log(imgSrc);
    //.setAttribute("style", "background-color: red;")
    //imgSrc.setAttribute("height","100");
    let sanitizedUrl = this.sanitizer.bypassSecurityTrustUrl(imgSrc.src);
    console.log(sanitizedUrl);

    let img: any =
      "<img src='" +
      sanitizedUrl +
      "' id=" +
      10 +
      ' height= 300' +
      ' width= 500' +
      '>';
    document.execCommand('insertHTML', false, img);
  }
  /*Just for testing the preview */
  peviewForm() {
    //console.log("preview form");
    this.docString = this.doc.innerHTML;
  }
}
