import { Injectable } from '@angular/core';
import { AppAPI } from 'app/api/app.api';

@Injectable()
export class SignInServices {

    constructor(
        private appAPI: AppAPI
    ) { }

    checkUser() {
        const endPoint = 'users';
        const usersList = this.appAPI.fetchGetData(endPoint);
        // this.http.get('http://localhost:5000/users')
        //     .map((response: Response) => response.json().users);
        return usersList;
    }
}
