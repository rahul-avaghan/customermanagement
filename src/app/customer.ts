import { Name } from './Name';
export class Customer {

    constructor(name: Name) {
        this.name = name;
    }
    name: Name;
    customerID: number;
    birthday: string;
    gender: string;
    lastContact: string;
    customerLifetimeValue: number;

}
