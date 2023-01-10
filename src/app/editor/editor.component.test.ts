import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  editor:any; 

  constructor() { }

  ngOnInit() {
    //this.editor = document.getElementById('editText');
  }

  toggleDetails(): void {
    console.log("test console");
  }
  /*
  onLoad()  {
    var iframe   =  (<HTMLInputElement>document.getElementById('editText')).value;
    //var iWindow = iframe.contentWindow;
    var doc = iframe.contentDocument || iframe.contentWindow.document;
    console.debug(doc);
    console.log(doc.getElementById('foo').innerText);
  }
*/
  execCmd(command){
    console.log(command);
    this.editor.document.execCommand('bold',false,null);

  }
  
}

