import { NextFunction as Next, Request, Response } from "express";
import bcrypt from "bcrypt";

import { User as UserModel } from "../models/UserModel";
import { createCustomApiError } from "../error/custom-error";
import jwt from "jsonwebtoken";

class TokenController {
	async create(req: Request, res: Response, next: Next) {
		try {
			const { email, password } = req.body;

			const user = await UserModel.findOne({ where: { email: email } });
			if (!user) throw createCustomApiError("Usuário não encontrado", 400);

			const validatePassword = await bcrypt.compare(password, user.password);
			if (!validatePassword) throw createCustomApiError("Senha inválida", 400);

			const payload = {
				id: user.id,
				email: user.email,
				name: user.name,
			};

			const token = jwt.sign(payload, process.env.SECRET_KEY, {
				expiresIn: "3d",
			});

			res.status(200).json({ token });
		} catch (err) {
			next(err);
		}
	}

	async refresh(req: Request, res: Response, next: Next) {
		try {
			const { authorization } = req.headers;
			if (!authorization) throw createCustomApiError("Não está logado", 400);

			const oldToken = authorization.split(" ")[1];

			const data: any = jwt.decode(oldToken);
			console.log(new Date(data.exp * 1000), Date.now());
			if (data.exp * 1000 < Date.now())
				throw createCustomApiError("Faça login novamente", 401);

			const payload = { id: data.id, email: data.email, name: data.name };

			const newToken = jwt.sign(payload, process.env.SECRET_KEY, {
				expiresIn: "3d",
			});

			res.status(200).json({ token: newToken });
		} catch (err) {
			next(err);
		}
	}
}

export default new TokenController();
