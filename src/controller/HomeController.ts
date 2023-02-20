import { NextFunction, Request, Response } from "express";

class HomeController {
	index(req: Request, res: Response, next: NextFunction) {
		res.json({ msg: "Requisição aceita e respondida!" });
	}
}

export default new HomeController();
