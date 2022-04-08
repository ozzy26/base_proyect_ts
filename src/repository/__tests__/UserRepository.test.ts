// import { Model } from "mongoose";
import { Customer } from "../../domain/Customer";
import { User } from "../../Schema/UserSchema";
import { UserRepositoryImpl } from "../UserRepositoryImpl";
import fetch from "node-fetch";
import axios from "axios";

jest.mock("node-fetch", () => jest.fn());

describe("UserRepository", () => {
  it("create", async () => {
    // Prepare

    // axios.get.mockImplementationOnce(() => Promise.resolve({
    //   data: 'mock data'
    // });
    // axios.get = jest.fn().mockImplementationOnce(() => Promise.resolve({ data: 'mock data' }));
    // const modelMock = {
    //   create: jest.fn(),
    // } as unknown as Model<User>;

    // const repository = new UserRepositoryImpl({
    //   model: modelMock,
    // });

    // // Execute
    // await repository.create(
    //   new Customer({ id: "customerId", name: "name", age: 21 })
    // );

    // // Validate
    // expect(modelMock.create).toBeCalledWith({
    //   email: "email",
    //   name: "name",
    // });
  });
});
