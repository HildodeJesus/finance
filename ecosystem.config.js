module.exports = {
	apps: [
		{
			name: "webapi",
			script: "dist/server.js",
			exec_mode: "cluster",
			instances: "-1",
			autorestart: true,
			env_production: {
				NODE_ENV: "production",
			},
			env_development: {
				NODE_ENV: "development",
			},
		},
	],
};
