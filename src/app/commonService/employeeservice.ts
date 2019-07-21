import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Employee} from './employee';
import {CarBrand} from './carBrand';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class EmployeeService {
	
    constructor(private http: Http) {}
	
    getEmployeesMedium() {
        return this.http.get('../../assets/mock-data/employees-medium.json')
                    .toPromise()
                    .then(res => <Employee[]> res.json().data)
                    .then(data => {console.log(data); return data; });
    }
	
	    getCarsSmall() {
        return this.http.get('../../assets/mock-data/car-brand.json')
                    .toPromise()
                    .then(res => <CarBrand[]> res.json().data)
                    .then(data => {console.log(data); return data; });
    }
	
}