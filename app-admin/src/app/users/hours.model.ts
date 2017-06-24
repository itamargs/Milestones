export class Hours{
    public date: string;
    public day: string;
    public employer: string;
    public startHour: string;
    public endHour: string;
    public totalHours: number;
    public key: string

    constructor(date:string, day:string, employer:string, startHour:string, endHour:string, totalHours:number,  key:string) {
        this.date = date;
        this.day = day;
        this.employer = employer;
        this.startHour = startHour;
        this.endHour = endHour;
        this.totalHours = totalHours;
        this.key = key;
    }
}