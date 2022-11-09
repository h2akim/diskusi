import "module-alias/register";
import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import api from "@routes/api";
import web from "@routes/web";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use('/api', api);
app.use('/', web);

app.listen(port, () => {
	console.log(`⚡️ Server running on port ${port}`);
});