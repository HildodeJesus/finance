import { NextFunction as Next, Request, Response } from "express";
import { v4 } from "uuid";

import Queue from "../lib/Queue";
import UserRepo from "../repositories/UserRepo";

class UserController {
	async index(req: Request, res: Response, next: Next) {
		try {
			const users = await UserRepo.getAll();

			res.status(200).json({ users });
		} catch (err) {
			next(err);
		}
	}

	async show(req: Request, res: Response, next: Next) {
		try {
			const { id: userId } = req.params;

			const user = await UserRepo.getById(userId);

			res.status(200).json({ user });
		} catch (err) {
			next(err);
		}
	}

	async delete(req: Request, res: Response, next: Next) {
		try {
			const userId = req.userId;
			await UserRepo.delete(userId);

			res.status(200).json({ msg: "Deletado com sucesso" });
		} catch (err) {
			next(err);
		}
	}

	async update(req: Request, res: Response, next: Next) {
		try {
			const userId = req.userId;
			const userUpdated = { ...req.body };

			await UserRepo.update(userId, userUpdated);

			res.status(200).json({ msg: "Atualizado com sucesso!" });
		} catch (err) {
			next(err);
		}
	}

	async create(req: Request, res: Response, next: Next) {
		try {
			const body = req.body;
			const user = {
				id: v4(),
				name: body.name,
				email: body.email,
				password: body.password,
			};

			await UserRepo.create(user);

			await new Queue().add("RegistrationEmail", {
				name: user.name,
				email: user.email,
			});

			res.status(200).json({ msg: "Usuário criado com sucesso" });
		} catch (err) {
			next(err);
		}
	}
}

export default new UserController();
