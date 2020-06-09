export class Post {
    constructor(public title:string,public name:string,  public createdat:string,
         public content:string, public category:string, public createdby:string,
          public img:string, public likes:Number, public likedBy:string, public comments:string, public isapproved:Boolean,){
    }
}
