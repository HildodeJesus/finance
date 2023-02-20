import { Router } from "express";

const router = Router();

import tokenController from "../controller/TokenController";

router.post("/", tokenController.create);
router.get("/refresh", tokenController.refresh);

export default router;
