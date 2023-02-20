const databaseConfig = {
	database: process.env.DATABASE,
	username: process.env.DATABASE_USERNAME,
	password: process.env.DATABASE_PASSWORD,
	dialect: "mysql",
	host: process.env.DATABASE_HOST,
	port: Number(process.env.DATABASE_PORT),
	define: {
		timestamps: true,
		underscored: true,
		createdAt: "created_at",
		updatedAt: "updated_at",
	},
	dialectOptions: {
		timezone: "-03:00",
	},
	timezone: "-03:00",
};

export default databaseConfig;
