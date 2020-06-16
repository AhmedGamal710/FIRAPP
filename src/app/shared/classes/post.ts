export class Post {
    constructor(public title:string,public name:string,  public createdat:string, public _id:number,
         public content:string, public category:string, public createdby:string,
          public img:string, public likes:Number, public likedBy:string, public comments:string,public commentsnum:string, public isapproved:Boolean,){
    }
}
export class Miscellaneousfields {
    constructor(public title:string,public name:string,  public createdat:string,
         public content:string, public category:string, public createdby:string,
          public img:string, public likes:Number, public likedBy:string, public comments:string, public commentsnum:string, public isapproved:Boolean,){
    }
}

export class Applicationdevelopment {
    constructor(public title:string,public name:string,  public createdat:string,
         public content:string, public category:string, public createdby:string,
          public img:string, public likes:Number, public likedBy:string, public comments:string, public commentsnum:string, public isapproved:Boolean,){
    }
}

export class Datascience {
    constructor(public title:string,public name:string,  public createdat:string,
         public content:string, public category:string, public createdby:string,
          public img:string, public likes:Number, public likedBy:string, public comments:string, public commentsnum:string, public isapproved:Boolean,){
    }
}
export class Competitiveprogramming {
    constructor(public title:string,public name:string,  public createdat:string,
         public content:string, public category:string, public createdby:string,
          public img:string, public likes:Number, public likedBy:string, public comments:string, public commentsnum:string, public isapproved:Boolean,){
    }
}