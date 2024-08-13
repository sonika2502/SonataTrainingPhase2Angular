export class Products{
    productId:number;
    productName:String;
    productPrice:number;
    productDesc: String;

    constructor(id:number,name:string,price:number,desc:string){
        this.productId=id;
        this.productName=name;
        this.productPrice=price;
        this.productDesc=desc;
    }
}