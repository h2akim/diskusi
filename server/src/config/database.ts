export const database = {
	username: process.env.DB_USERNAME || "",
	password: process.env.DB_PASSWORD || "",
	database: process.env.DB_DATABASE || "",
	host: process.env.DB_HOST || "",
	port: process.env.DB_PORT || 3306,
	dialect: process.env.DB_CONNECTION || "mysql",
}