import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions, Response} from '@angular/http';
import { Plants } from '../temp/Plants';
import { Observable } from "rxjs";

@Injectable()
export class RegistrationService {
    private regUrl: string = API_URL + "registration";
    constructor(private http:Http) { }

    create(password: string): void{
        let headers = new Headers();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        this.http
            .post("http://localhost:4567/registration", JSON.stringify({password}), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(error => Observable.throw(error));
        console.log(password);
    }



}