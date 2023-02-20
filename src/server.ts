import app from "./app";
import logger from "./config/logger";

const PORT = process.env.PORT || 4000;
import sequelize from "./database";

(async function () {
	try {
		await sequelize.authenticate();
		console.log("Database connect");
		app.listen(PORT, () => console.log(`Server listening in the port ${PORT}`));
		logger.info(`Server iniciado em ${new Date()}`);
	} catch (err) {
		if (process.env.NODE_ENV !== "production") console.log(err);
		logger.error(err);
	}
})();
