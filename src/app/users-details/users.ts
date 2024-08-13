export class Users{
    userName:String;
    userId:number;
    userCompany:string;
    userSal:number;
    constructor(name:string,id:number,company:string,sal:number){
        this.userName=name;
        this.userId=id;
        this.userCompany=company;
        this.userSal=sal;
    }
}