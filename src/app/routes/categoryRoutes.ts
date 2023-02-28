import { Router } from "express";

const router = Router();

import categoryController from "../controller/CategoryController";

router.get("/", categoryController.index);
router.post("/", categoryController.store);

export default router;
