export class HttpExpectionBase extends Error {
  status: number;
  message: string;
  constructor(status: number, message?: string) {
    console.log('message(HttpExpectionBase) => ', message);
    super(message);
    this.status = status;
    this.message = message;
  }
}