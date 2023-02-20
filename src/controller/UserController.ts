import { NextFunction as Next, Request, Response } from "express";
import { v4 } from "uuid";

import { createCustomApiError } from "../error/custom-error";
import { User as UserModel } from "../models/UserModel";

class UserController {
	async index(req: Request, res: Response, next: Next) {
		try {
			const users = await UserModel.findAll({
				attributes: ["id", "name", "email"],
			});

			res.status(200).json({ users });
		} catch (err) {
			next(err);
		}
	}

	async show(req: Request, res: Response, next: Next) {
		try {
			const { id } = req.params;
			const user = await UserModel.findByPk(id, {
				attributes: ["id", "name", "email"],
			});

			res.status(200).json({ user });
		} catch (err) {
			next(err);
		}
	}

	async delete(req: Request, res: Response, next: Next) {
		try {
			const user = await UserModel.findByPk(req.userId);
			user.destroy();

			res.status(200).json({ msg: "Deletado com sucesso" });
		} catch (err) {
			next(err);
		}
	}
	async update(req: Request, res: Response, next: Next) {}
	async create(req: Request, res: Response, next: Next) {
		try {
			const user = {
				...req.body,
				id: v4(),
			};

			await UserModel.create(user);

			res.status(200).json({ msg: "Usuário criado com sucesso" });
		} catch (err) {
			next(err);
		}
	}
}

export default new UserController();
