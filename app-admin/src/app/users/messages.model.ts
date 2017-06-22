export class Messages{
    public title: string;
    public date: string;
    public content: string;
    public key: string;
    public status: boolean;

    constructor(title:string, date:string, content:string, key:string, status:boolean){
        this.title = title;
        this.date = date;
        this.content = content;
        this.key = key;
        this.status = status;
    }
}