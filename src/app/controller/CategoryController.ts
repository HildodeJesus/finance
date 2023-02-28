import { NextFunction as Next, Request, Response } from "express";
import { v4 } from "uuid";

import CategoryRepo from "../repositories/CategoryRepo";

class CategoryController {
	async index(req: Request, res: Response, next: Next) {
		try {
			const categories = await CategoryRepo.getAll();

			res.json({ categories });
		} catch (err) {
			next(err);
		}
	}

	async store(req: Request, res: Response, next: Next) {
		try {
			const { name, color, type } = req.body;
			const newCategory = { id: v4(), name, color, type };

			await CategoryRepo.create(newCategory);

			return res.status(200).json({ msg: "Categoria criada com sucesso!" });
		} catch (err) {
			next(err);
		}
	}

	async show(req: Request, res: Response, next: Next) {
		try {
			const { id } = req.params;
			const category = await CategoryRepo.getById(id);

			res.status(200).json({ category });
		} catch (err) {
			next(err);
		}
	}

	async delete(req: Request, res: Response, next: Next) {
		try {
			const { id } = req.params;
			await CategoryRepo.delete(id);

			res.status(200).json({ msg: "Deletado com sucesso!" });
		} catch (err) {
			next(err);
		}
	}
	async update(req: Request, res: Response, next: Next) {
		try {
			const { id } = req.params;
			const categoryUpdated = { ...req.body };

			const category = await CategoryRepo.update(id, categoryUpdated);

			res.status(200).json({ msg: "Atualizado com sucesso!" });
		} catch (err) {
			next(err);
		}
	}
}

export default new CategoryController();
