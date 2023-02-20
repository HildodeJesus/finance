import winston from "winston";

const logger = winston.createLogger({
	level: "info",
	format: winston.format.combine(
		winston.format.errors({ stack: true }),
		winston.format.json()
	),
	transports: [
		new winston.transports.File({
			filename: "src/logs/error.log",
			level: "error",
		}),
		new winston.transports.File({
			filename: "src/logs/info.log",
			level: "info",
		}),
	],
});

export default logger;
