import express, { Response, Request } from "express";
const router = express.Router();

router.use(express.json());

router.post("/", (req: Request, res: Response) => {
  let subject: string = req.body.subject;
  let body: string = req.body.body;
  let user_to: string = req.body.user_to;
  let values: string[] = [user_to, subject, body];

  values.forEach((value) => {
    if (value === undefined || value === "") {
      return res.send({ detail: "Please provide all values." });
    }
  });

  res.send("nice");
});

module.exports = router;
