import { Request, Response } from "express";

export const ping = (req: Request, res: Response) => res.json({ pong: true });

export const random = (req: Request, res: Response) =>
  res.json({ number: Math.floor(Math.random() * 100) });

export const nome = (req: Request, res: Response) =>
  res.json({ nome: req.params.nome });
