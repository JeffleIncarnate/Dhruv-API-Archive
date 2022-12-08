import express, { Response, Request } from "express";
const router = express.Router();
let pool = require("../../core/database/pool");

router.use(express.json());

router.post("/", (req: Request, res: Response) => {
  let url: string = req.body.url;
  let name: string = req.body.name;

  if (url === undefined || url === "")
    return res.send({ detail: "Provide url." });

  if (name === undefined || name === "")
    return res.send({ detail: "Provide name." });

  let query_str: string = "INSERT INTO redirect (name, url) VALUES ($1, $2)";
  let query_items: string[] = [name, url];

  pool.query(query_str, query_items, (err: any, sql_res: any) => {
    if (err) return res.status(500).send({ detail: err.stack });

    res.status(201).send({
      detail: "successfully added redirect.",
      your_url: `http://192.9.182.113:3000/redirect/r/${name}`,
    });
  });
});

module.exports = router;
