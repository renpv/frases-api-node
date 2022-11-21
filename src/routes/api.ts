import { Router, Request, Response } from "express";

import * as ApiController from "../controllers/apiController";
import * as FrasesController from "../controllers/frasesController";

const router = Router();
//Rotas de teste da API
router.get("/ping", ApiController.ping);
router.get("/random", ApiController.random);
router.get("/nome/:nome", ApiController.nome);

router.get("/frases", FrasesController.index);
router.get("/frases/create", FrasesController.create);
router.post("/frases", FrasesController.store);
router.get("/frases/:id", FrasesController.show);
router.get("/frases/:id/edit", FrasesController.edit);
router.put("/frases/:id", FrasesController.update);
router.delete("/frases/:id", FrasesController.destroy);

export default router;
