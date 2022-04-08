import { HttpExpectionBase } from "./HttpExepctionBase";

export class InternalServerError extends HttpExpectionBase {
  constructor(message?: string) {
    message ? super(500, message) : super(500);
  }
}
