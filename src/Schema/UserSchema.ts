// import { Schema, model, Model } from "mongoose";
import { Customer } from "../domain/Customer";

export interface User {
  name: string;
  email: string;
  avatar: string;
}

export class UserSchema {
  // public model: Model<User>;

  // constructor() {
  //   this.modelCreation();
  // }
  // private generateSchema(): Schema<User> {
  //   const schema = new Schema<User>({
  //     name: { type: String, required: true },
  //     email: { type: String, required: true },
  //     avatar: { type: String, required: false },
  //   });
  //   return schema;
  // }

  // private modelCreation(): void {
  //   this.model = model<User>("User", this.generateSchema());
  // }
}
