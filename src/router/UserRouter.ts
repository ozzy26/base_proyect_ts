import { Router } from "express";
import { UserController } from "../controller/UserController";
import { UserRepositoryImpl } from "../repository/UserRepositoryImpl";
import { UserServiceImpl } from "../service/UserServiceImpl";
import { Client } from "pg";
import { createConnection, getConnection, Connection, getManager, EntityManager } from "typeorm";


const connection = async () => await createConnection({
  url: "postgres://ijgabcno1:Z4G0cRdfotKZV0K4sDewo8bJIWwh8tgm@jelani.db.elephantsql.com/ijgabcno",
  type: "postgres"
})

export class UserRouter {
  public router: Router;
  private userController: UserController;
  constructor() {
    this.userController = new UserController({
      service: new UserServiceImpl({
        repository: new UserRepositoryImpl({
        }),
      }),
    });
    this.router = Router();
    this.listRouters();
  }

  listRouters() {
    this.router.post("/", this.userController.create.bind(this.userController));
    this.router.post("/loginn", this.userController.loign.bind(this.userController));
  }
}
