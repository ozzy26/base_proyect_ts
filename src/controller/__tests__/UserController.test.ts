import { NextFunction, Request, response, Response } from "express";
import { Customer } from "../../domain/Customer";
import { UserServiceI } from "../../service/UserServiceI";
import { UserController } from "../UserController";

describe("UserController", () => {
  it("create", async () => {
    // Prepare
    const serviceMock = {
      create: jest.fn(() => {
        const response = new Customer({
          id: "customerId",
          age: 20,
          name: "name",
        });
        return Promise.resolve(response);
      }),
    } as unknown as UserServiceI;

    const controller = new UserController({
      service: serviceMock,
    });

    const requestMock = {
      body: {
        name: "name",
        age: 20,
      },
    } as unknown as Request;

    const responseMock = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockImplementation((resJson) => {
        return resJson;
      }),
    } as unknown as Response;

    const nextMock: NextFunction = jest.fn();

    // Execute
    const response: Response = await controller.create(
      requestMock,
      responseMock,
      nextMock
    );

    // Validate
    expect(response).toEqual(
      new Customer({
        id: "customerId",
        name: "name",
        age: 20,
      })
    );

    expect(responseMock.status).toBeCalledWith(200);

    expect(serviceMock.create).toBeCalledWith(
      new Customer({
        name: "name",
        age: 20,
      })
    );
  });
});
