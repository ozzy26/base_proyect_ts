import { Customer } from "../domain/Customer";

export interface UserServiceI {
  create(customer: Customer): Promise<Customer>;
  login(customer: Customer): Promise<Customer>;
}
