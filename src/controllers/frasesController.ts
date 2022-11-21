import { Request, Response } from "express";
import { Frase } from "../models/Frase";

export const index = async (req: Request, res: Response) => {
  let frases = await Frase.findAll();
  res.json(frases);
};

export const create = () => {};
export const store = async (req: Request, res: Response) => {
  let { frase, autor } = req.body;
  let novaFrase = await Frase.create({ autor, frase });
  res.status(201).json({ novaFrase });
};
export const show = async (req: Request, res: Response) => {
  let { id } = req.params;
  let frase = await Frase.findByPk(id);
  if (frase) {
    res.status(200).json(frase);
  } else {
    res
      .status(200)
      .json({ error: "Nenhum registro foi encontrado com o id informado" });
  }
};
export const edit = () => {};
export const update = async (req: Request, res: Response) => {
  let { id } = req.params;
  let { autor, frase } = req.body;
  let frase_banco = await Frase.findByPk(id);
  if (frase_banco) {
    frase_banco.autor = autor;
    frase_banco.frase = frase;
    await frase_banco.save();
    res.status(200).json(frase_banco);
  } else {
    res
      .status(200)
      .json({ error: "Nenhum registro foi encontrado com o id informado" });
  }
};
export const destroy = async (req: Request, res: Response) => {
  let { id } = req.params;
  let frase_banco = await Frase.findByPk(id);
  if (frase_banco) {
    await frase_banco.destroy();
    res.status(200).json({ success: "Registro excluído com sucesso" });
  } else {
    res
      .status(200)
      .json({ error: "Nenhum registro foi encontrado com o id informado" });
  }
};
