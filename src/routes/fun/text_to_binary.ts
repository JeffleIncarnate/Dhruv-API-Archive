import express, { Response, Request } from "express";
const router = express.Router();

// Let us use json
router.use(express.json());

// Import utilities
let text_to_binary_utility = require("../../core/utilities/convert");

router.get("/", (req: Request, res: Response) => {
  let text: string = req.body.text;

  let converted_text: string = text_to_binary_utility.text_to_binary_func(text);
  res.send(converted_text);
});

module.exports = router;
