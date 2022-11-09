import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get('/', (req, res) => {
	res.send("Express + Typescript");
})

export default router;