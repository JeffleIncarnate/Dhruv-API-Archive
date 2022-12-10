import express, { Response, Request } from "express";
var fileupload = require("express-fileupload");

const router = express.Router();
router.use(fileupload());

router.put("/upload", (req: any, res: Response) => {
  if (!req.files) {
    return res.send("File was not found");
  }

  let file = req.files.FormFieldName;
  console.log(file);

  res.send("e");
});

router.get("/retrieve", (req: Request, res: Response) => {
  res.send("easdf");
});

module.exports = router;
