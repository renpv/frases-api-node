import { Router } from "express";

import * as ApiController from "../controllers/apiController";

const router = Router();
//Rotas home da API
router.get("/", ApiController.index);

export default router;
