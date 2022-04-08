import { Customer } from "../domain/Customer";
import { UserRepositoryI } from "./UserRepositoryI";
import { BadRequestError } from "../handler/BadRequestException";
import { getConnection } from "typeorm";

interface UserRepositoryImplProps {}

export class UserRepositoryImpl implements UserRepositoryI {
  constructor(private props: UserRepositoryImplProps) { }

  async create(customer: Customer): Promise<Customer> {
    return customer;
  }

  async login(customer: Customer): Promise<Customer> {
    try {
      const result: [] = await getConnection().manager.query('select * from customer where email = $1 and pwd = $2', [customer.email, customer.password]);
      console.log('result => ', result);
      if (result.length === 0) throw new BadRequestError('Usuario no existe');

      return customer;
    } catch (e: any) {
      console.log('e(repository) => ', JSON.parse(JSON.stringify(e)))
      console.log('e.message(repository) => ', JSON.parse(JSON.stringify(e.message)))
      if (e.status === 400) {
        throw new BadRequestError(e.message);
      }
    }
  }
}
