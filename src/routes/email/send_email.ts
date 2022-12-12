import express, { Response, Request } from "express";
const node_mailer = require("nodemailer");
const router = express.Router();
require("dotenv").config({ path: `${__dirname}/../../.env` });

router.use(express.json());

let transporter = node_mailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

router.post("/", (req: Request, res: Response) => {
  let subject: string = req.body.subject;
  let body: string = req.body.body;
  let user_to: string = req.body.user_to;
  let values: string[] = [user_to, subject, body];

  values.forEach((value) => {
    if (value === undefined || value === "")
      return res.send({ detail: "Please provide all values." });
  });

  let mail_options = {
    from: process.env.EMAIL,
    to: values[0],
    subject: values[1],
    text: values[2],
  };

  transporter.sendMail(mail_options, (err: any, success: any) => {
    if (err)
      return res
        .status(500)
        .send({ detail: "Error sending email. Please try again later." });
  });

  res.status(200).send({
    detail:
      "Successfully sent email, please check your inbox to verify your email.",
  });
});

module.exports = router;
