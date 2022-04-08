export class Customer {
  id: string;
  name: string;
  age: number;
  email: string;
  password: string;

  constructor(data?: Partial<Customer>) {
    if (data) {
      Object.assign(this, data);
    }
  }

  getApi() {
    return {
      id: this.id,
      age: this.age,
      name: this.name,
    };
  }
}
