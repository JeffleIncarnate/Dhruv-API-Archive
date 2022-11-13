import express, { Response, Request } from "express";
const router = express.Router();
let random = require("../../core/utilities/random"); // Utilities

// Let us use json
router.use(express.json());

router.get("/", (req: Request, res: Response) => {
  let truth: string = random.return_random_truth();
  res.send({ truth: truth });
});

module.exports = router;
