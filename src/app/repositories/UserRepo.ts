import { createCustomApiError } from "../error/custom-error";
import { User } from "../models/UserModel";

type UserType = {
	id?: string;
	name?: string;
	email?: string;
	password?: string;
};

class UserRepo {
	static async create(user: UserType) {
		await User.create(user);
		return;
	}
	static async update(id: string, userUpdated: UserType) {
		const user = await User.findByPk(id);
		await user.update(userUpdated);
		return;
	}
	static async delete(id: string) {
		const user = await User.findByPk(id);
		await user.destroy();
		return;
	}
	static async getById(id: string) {
		const user = await User.findByPk(id, {
			attributes: ["id", "name", "email", "password"],
		});
		if (!user) createCustomApiError("Usuário não encontrado!", 400);
		return user;
	}
	static async getAll() {
		const users = await User.findAll({
			attributes: ["id", "name", "email"],
		});
		if (users.length === 0)
			createCustomApiError("Não há nenhum usuário cadastrado!", 400);

		return users;
	}
}

export default UserRepo;
