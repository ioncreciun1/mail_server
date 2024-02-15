export class HttpCustomException extends Error {
    public statusCode:number;
    public name:string;


    constructor(message:string,statusCode:number) {
      super(message);
      this.name = "HttpCustomException";
      this.statusCode = statusCode;
    }
  }