import { Messages } from './messages.model';
import { Hours } from './hours.model';
export class User {
    public firstName: string;
    public lastName: string;
    public id: number;
    public email: string;
    public uid: string;
    public type: number;
    public hours: Hours[];
    public messages: Messages[];
    public key : string;

    constructor(firstName:string, lastName:string, id:number, email:string, uid:string, type:number, hours:Hours[], messages:Messages[], key:string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.email = email;
        this.uid = uid;
        this.type = type;
        this.hours = hours;
        this.key = key;
        this.messages = messages;
    }
}