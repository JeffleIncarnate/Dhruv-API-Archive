import express, { Response, Request } from "express";
const router = express.Router();
let random = require("../../core/utilities/random"); // Utilities

router.get("/", (req: Request, res: Response) => {
  let num: number = random.return_random_heads_or_tales();
  num == 0 ? res.send({ choice: "Heads" }) : res.send({ choice: "Tails" });
});

module.exports = router;
