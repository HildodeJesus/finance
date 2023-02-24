import Mail from "../lib/Mail";

export default {
	key: "RegistrationEmail",

	options: { delay: 5000 },

	async handle({ data }) {
		const { email, name } = data;

		console.log(email, name);

		await Mail.sendMail({
			from: "Finance <test@gmail.com>",
			to: email,
			subject: "Bem Vindo!",
			html: `<h1>Seja bem vindo a Finance, ${name}</h1><p>O seu acesso a conta já foi liberado https://sitetest.com.br</p>`,
			text: `Seja bem vindo a Finance, ${name}O seu acesso a conta já foi liberado https://sitetest.com.br`,
		});
	},
};
