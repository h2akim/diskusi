import express, { Router } from "express";

const router: Router = express.Router();

router.get('/', (req, res) => {
	res.json({
		"testing": 1234
	});
})

export default router;