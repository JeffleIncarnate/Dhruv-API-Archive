import express, { Response, Request } from "express";
let compression = require("compression");
import path from "path";
let random = require("../../core/utilities/random"); // Utilities

const router = express.Router();
router.use(compression());

router.get("/", (req: Request, res: Response) => {
  let num: number = random.get_random_number(1, 7);
  res.sendFile(path.join(`${__dirname}/capybara/capy${num}.png`));
});

module.exports = router;
