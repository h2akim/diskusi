import "module-alias/register";
import "reflect-metadata";
import express, { Express } from 'express';
import api from "@routes/api";
import web from "@routes/web";

/** Environment */
import dotenv from 'dotenv';
dotenv.config();

/** Providers */
import "./providers/database";

/** Express */
const app: Express = express();
const port = process.env.PORT;

/** Routes */
app.use('/api', api);
app.use('/', web);

app.listen(port, () => {
	console.log(`⚡️ Server running on port ${port}`);
});