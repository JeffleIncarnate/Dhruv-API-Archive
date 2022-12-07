import express, { Response, Request } from "express";
import path from "path";
const router = express.Router();
let random = require("../../core/utilities/random"); // Utilities

router.get("/", (req: Request, res: Response) => {
  let num: number = random.get_random_number(1, 7);
  res.sendFile(path.join(`${__dirname}/capybara/capy${num}.png`));
});

module.exports = router;
