import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Question } from '../models/question.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable()
export class EditorService {
  constructor(private http: HttpClient) {}

  private userUrl = 'http://localhost:8080/user-portal/api';

  public getUsers() {
    return this.http.get<Question[]>(this.userUrl);
  }

  public deleteUser(question: Question) {
    return this.http.delete(this.userUrl + '/' + question.id);
  }

  public createQuestion(question: Question) {
    console.log('uploadQuestion');
    return this.http.post<Question>(this.userUrl, question);
  }

  public getUsersById(question: Question) {
    return this.http.get<Question>(this.userUrl + '/' + question.id);
  }
}
