import { Router } from "express";

const router = Router();

import homeController from "../controller/HomeController";

router.get("/", homeController.index);

export default router;
