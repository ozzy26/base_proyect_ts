import { Response } from "express";

export function ApiOkeyResponse(
  res: Response,
  message?: { [key: string]: any }
): any {
  return res.status(200).json(message);
}
