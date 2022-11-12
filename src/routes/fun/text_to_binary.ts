const express = require("express");
const router = express.Router();

// Let us use json
router.use(express.json());

// Import utilities
let text_to_binary_utility = require("../../core/utilities/convert");

router.get("/", (req: any, res: any) => {
  let text: string = req.body.text;

  let converted_text: string =
    text_to_binary_utility.convert_text_to_binary(text);

  res.send({ detail: converted_text });
});

module.exports = router;
