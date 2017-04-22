import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class SignInServices {

    constructor(private http: Http) { }

    checkUser() {
        return this.http.get('app/api/mock.json')
            .map((response: Response) => response.json());
    }
}