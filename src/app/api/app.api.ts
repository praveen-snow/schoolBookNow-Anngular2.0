import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class AppAPI {
    constructor(private http: Http){ }
    fetchGetData(endPoint) {
        const baseUrl = 'http://localhost:5000/';
        const apiUrl = baseUrl + 'users';
        const usersList = this.http.get(apiUrl)
            .map((response: Response) => response.json().users);
        return usersList;
    }

    // fetchPostData(endPoint) {

    // }
}
