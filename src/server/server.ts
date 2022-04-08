import express from 'express';
import { App } from "./app";

export function Bootstrap() {
  const app = express();
  new App({ app, port: 8081 });
}

Bootstrap();
