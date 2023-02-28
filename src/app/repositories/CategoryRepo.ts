import { createCustomApiError } from "../error/custom-error";
import { Category } from "../models/CategoryModel";

type CategoryType = {
	id: string;
	name: string;
	color: string;
	type: string;
};

class CategoryRepo {
	static async create(category: CategoryType) {
		await Category.create(category);
		return;
	}
	static async update(id: string, categoryUpdated: CategoryType) {
		const category = await Category.findByPk(id);
		await category.update(categoryUpdated);
		return;
	}
	static async delete(id: string) {
		const category = await Category.findByPk(id);
		await category.destroy();
		return;
	}
	static async getById(id: string) {
		const category = await Category.findByPk(id);
		if (!category) throw createCustomApiError("Categoria não encontrada!", 400);

		return category;
	}
	static async getAll() {
		const categories = await Category.findAll({
			attributes: ["id", "name", "color", "type"],
		});
		if (categories.length === 0)
			throw createCustomApiError("Não encontramos nenhuma categoria!", 400);

		return categories;
	}
}

export default CategoryRepo;
