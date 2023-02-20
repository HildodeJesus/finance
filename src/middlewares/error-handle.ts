import {
	ErrorRequestHandler as Err,
	NextFunction,
	Request,
	Response,
} from "express";
import { ValidationError } from "sequelize";

import logger from "../config/logger";
import { CustomApiError } from "../error/custom-error";

export default function (
	err: Err,
	req: Request,
	res: Response,
	next: NextFunction
) {
	if (process.env.NODE_ENV !== "production") console.log(err);

	if (err instanceof CustomApiError) {
		return res.status(err.statusCode).json({ msg: err.message });
	}

	if (err instanceof ValidationError) {
		return res.status(400).json({
			errors: err.errors.map(error => error.message),
		});
	}

	logger.error(err);
	return res.status(500).json("Alguma coisa deu errado. Tente Novamente");
}
