import { Router } from "express";
import {
  deletePair,
  getPair,
  storePair,
} from "../controllers/app.controller.js";

const router = Router();

router.post("/", storePair);
router.get("/:key", getPair);
router.delete("/:key", deletePair);

export default router;
