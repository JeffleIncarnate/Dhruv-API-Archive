import express, { Response, Request } from "express";
const router = express.Router();
const pool = require("../../core/database/pool");

router.use(express.json());

router.get("/", (req: Request, res: Response) => {
  let password: string = req.body.password;

  if (
    password === undefined ||
    password === "" ||
    password !== process.env.PASSWORD
  )
    return res.send({ detail: "Provide password or Incorrect password." });

  pool.query(
    'SELECT * FROM "public"."redirect" LIMIT 100',
    (err: any, sqlRes: any) => {
      // If err, then throw an error, else we just send back the array
      if (err) {
        return res.status(500).send({ detail: err.stack });
      }

      return res.send(sqlRes.rows);
    }
  );
});

module.exports = router;
