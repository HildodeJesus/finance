import { NextFunction as Next, Request, Response } from "express";
import jwt from "jsonwebtoken";

function loginRequired(req: Request, res: Response, next: Next) {
	try {
		const { authorization } = req.headers;
		if (!authorization) throw "";

		const token = authorization.split(" ")[1];

		const data: any = jwt.verify(token, process.env.SECRET_KEY);
		const { id, email, name } = data;

		req.userId = id;
		req.email = email;
		req.name = name;

		return next();
	} catch (err) {
		return res.status(401).json({ msg: "Token inválido ou expirado!" });
	}
}

export default loginRequired;
