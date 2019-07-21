import { Component } from '@angular/core';
import {Employee} from '../commonService/employee';
import {EmployeeService} from '../commonService/employeeservice';

class PrimeEmployee implements Employee {
    constructor(public name?, public empId?, public city?) {}
}

@Component({
  selector: 'app-custom-table',
  templateUrl: '../pages/custom-table.component.html',
  styleUrls: ['../componentCss/custom-table.component.css'],
  providers: [EmployeeService]
})
export class CustomTableComponent {

  displayDialog: boolean;

    employee: Employee = new PrimeEmployee ();

    selectedEmployee: Employee;

	updateIndex: number;
	
    newEmployee: boolean;

    employees: Employee[];

	cols: any[];

	tmpData : any;

    constructor(private employeeService: EmployeeService) { }
    ngOnInit() {
        this.employeeService.getEmployeesMedium().then(employees => this.employees = employees);
		
		this.cols = [
            { field: 'name', header: 'Name' },
            {field: 'empId', header: 'Emp ID' },
            { field: 'city', header: 'City' }
        ];
    }

	showDialogToAdd() {
        this.newEmployee = true;	
        this.employee = new PrimeEmployee ();
        this.displayDialog = true;
    }

    save() {
        if(this.newEmployee)
		{
			this.tmpData = {name:this.employee.name, empId:this.employee.empId, city:this.employee.city };
			console.log(this.employee.name + '' +this.employee.empId + '' +this.employee.city);
			this.employees.unshift(Object.assign({}, this.tmpData));
			this.employees=this.employees.slice();
			console.log(this.employees.slice());	
			this.tmpData = {};
		}
        else
		{
			this.tmpData = {name:this.employee.name, empId:this.employee.empId, city:this.employee.city };
            this.employees[this.updateIndex] = this.tmpData;
			this.employees=this.employees.slice();
			this.tmpData = {};
			
		}
        this.employee = null;
        this.displayDialog = false;
    }
	
		cancel()
		{
			this.employee = null;
			this.displayDialog = false;
		}
    delete(index) {
        this.employees.splice(index, 1);
		this.employees=this.employees.slice();
        this.employee = null;
        this.displayDialog = false;
    }
	onRowSelect(data) {
		console.log(data);
		console.log(this.cloneCar(data));
        this.newEmployee = false;
        this.employee = this.cloneCar(data);
        this.displayDialog = true;
		this.updateIndex = this.findSelectedCarIndex(data);
    }

    cloneCar(c: Employee): Employee {
        let employee = new PrimeEmployee ();
        for(let prop in c) {
            employee[prop] = c[prop];
        }
        return employee;
    }

    findSelectedCarIndex(data): number {
        return this.employees.indexOf(data);
    }
}
