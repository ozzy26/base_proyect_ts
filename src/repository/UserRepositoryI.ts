import { Customer } from "../domain/Customer";

export interface UserRepositoryI {
  create(customer: Customer): Promise<Customer>;
  login(customer: Customer): Promise<Customer>;
}
