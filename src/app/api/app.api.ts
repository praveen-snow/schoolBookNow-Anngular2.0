import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers} from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppAPI {
    constructor(private http: Http) { }
    fetchGetData(endPoint) {
        const base = this.getBaseUrl();
        const apiUrl = base + 'users';
        const usersList = this.http.get(apiUrl)
            .map((response: Response) => response.json().users);
        return usersList;
    }

    fetchPostData(endPoint, req) {
        // this function is for the post call implementation
        const response = {};
        const base = this.getBaseUrl();
        const apiUrl = base + 'signin';
        const bodyString = JSON.stringify(req); // Stringify payload
        const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        const options = new RequestOptions({ headers: headers }); // Create a request option

        return this.http.post(apiUrl, req, options) // ...using post request
                         .map((res: Response) => res.json()) // ...and calling .json() on the response to return data
                         .catch((error: any) => Observable.throw(error.json().error || 'Server error')); // ...errors if
    }

    getBaseUrl() {
    const baseUrl = 'http://localhost:5000/';
        return baseUrl;
    }
}
