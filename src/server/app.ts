import express, { NextFunction, Request, Response } from "express";
import { getConnectionManager } from "typeorm";
import Console from "console";
import { UserRouter } from "../router/UserRouter";
import { BadRequestError } from "../handler/BadRequestException";


export interface AppProps {
  app: express.Application;
  port: number;
}

export class App {

  constructor(private props: AppProps) {
    this.routers();
    this.listenServer();
    this.dbConnection();
    this.setup();
    this.initializeErrorHandler();
  }

  setup() {
    this.props.app.use(express.json());
    this.props.app.use(express.urlencoded({ extended: true }));
    this.props.app.use(this.cors);
  }

  initializeErrorHandler() {
    this.props.app.use(this.error);
  }

  routers() {
    this.props.app.use("/user", new UserRouter().router);
  }

  async dbConnection() {
    const connectionManager = getConnectionManager();
    const connection = connectionManager.create({
      url: 'postgres://ijgabcno:Z4G0cRdfotKZV0K4sDewo8bJIWwh8tgm@jelani.db.elephantsql.com/ijgabcno',
      type: 'postgres',
      synchronize: false,
      logging: true,
    });
    await connection.connect();
  }

  listenServer() {
    this.props.app.listen(this.props.port, () => {
      Console.debug(`server is listening on ${this.props.port}`);
    });
  }

  cors(req: Request, res: Response, next: NextFunction) {
    res.append("Access-Control-Allow-Origin", ["*"]);
    res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Allow", "GET, POST, OPTIONS, PUT, DELETE");
    res.header(
      "Access-Control-Allow-Headers",
      "Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method"
    );
    next();
  }

  error(error: Error, req: Request, res: Response, next: NextFunction) {
    if (error instanceof BadRequestError) {
      res.status(error.status).send({ status: error.status, message: error.message });
    } else {
      res.status(500).send({ status: 500, message: 'Unknown error' });
    }
  }
}
