import { Router } from "express";

import * as FrasesController from "../controllers/frasesController";

const router = Router();

router.get("/frases", FrasesController.index);
// router.get("/frases/create", FrasesController.create);
router.post("/frases", FrasesController.store);
router.get("/frases/:id", FrasesController.show);
// router.get("/frases/:id/edit", FrasesController.edit);
router.put("/frases/:id", FrasesController.update);
router.delete("/frases/:id", FrasesController.destroy);

export default router;
