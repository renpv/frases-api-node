import { Request, Response } from "express";

export const index = (req: Request, res: Response) =>
  res.json({ index: "Api de frases" });
