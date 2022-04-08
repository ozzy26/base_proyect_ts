import { HttpExpectionBase } from "./HttpExepctionBase";

export class BadRequestError extends HttpExpectionBase {
  constructor(message?: string) {
    message ? super(400, message) : super(400);
  }
}
