import { Router } from "express";

const router = Router();

import userController from "../controller/UserController";
import loginRequired from "../middlewares/loginRequired";

router.get("/", userController.index);
router.post("/", userController.create);
router.delete("/", loginRequired, userController.delete);
router.patch("/", loginRequired, userController.update);

export default router;
