import { NextFunction, Request, Response } from "express";
import Console from "console";
import { InternalServerError } from "../handler/InternalServerException";
import { UserServiceI } from "../service/UserServiceI";
import { Customer } from "../domain/Customer";
import { ApiOkeyResponse } from "../handler/response";
import { BadRequestError } from "../handler/BadRequestException";

interface UserControllerProps {
  service: UserServiceI;
}

export class UserController {
  constructor(private props: UserControllerProps) { }

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const body: Customer = req.body;
      const customer = new Customer({ name: body.name, age: body.age });
      const response = await this.props.service.create(customer);
      return ApiOkeyResponse(res, response);
    } catch (e: any) {
      Console.debug("e => ", e);
      return new InternalServerError(e.message);
    }
  }

  async loign(req: Request, res: Response, next: NextFunction) {
    try {
      if (req.body === undefined) throw new BadRequestError('Body undefined');
      const body: Customer = req.body;
      const customer = new Customer({ email: body.email, password: body.password });
      const response = await this.props.service.login(customer);
      return ApiOkeyResponse(res, response);
    } catch (e: any) {
      console.log("E => ", JSON.stringify(e))
      if (e.status === 400) {
        next(new BadRequestError(e))
      }
    }
  }
}
