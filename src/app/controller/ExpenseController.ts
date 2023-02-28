import { NextFunction as Next, Request, Response } from "express";

class ExpenseController {
	async show(req: Request, res: Response, next: Next) {}
	async delete(req: Request, res: Response, next: Next) {}
	async update(req: Request, res: Response, next: Next) {}
	async create(req: Request, res: Response, next: Next) {}
}

export default new ExpenseController();
