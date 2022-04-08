import { Customer } from "../domain/Customer";
import { UserRepositoryI } from "../repository/UserRepositoryI";
import { UserServiceI } from "./UserServiceI";
import { BadRequestError } from "../handler/BadRequestException";
import { InternalServerError } from "../handler/InternalServerException";

interface UserServiceImplProps {
  repository: UserRepositoryI;
}

export class UserServiceImpl implements UserServiceI {
  constructor(private props: UserServiceImplProps) { }

  async create(customer: Customer): Promise<Customer> {
    try {
      return await this.props.repository.create(customer);
    } catch (e: any) {
      throw new InternalServerError(e);
    };
  }

  async login(customer: Customer): Promise<Customer> {
    try {
      return await this.props.repository.login(customer);
    } catch (e: any) {
      if (e.status === 400) {
        throw new BadRequestError(e.message);
      }
    }
  }
}
