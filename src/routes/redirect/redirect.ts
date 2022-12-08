import express, { Response, Request } from "express";
const router = express.Router();
const pool = require("../../core/database/pool");

router.use(express.json());

router.get("/:name", (req: Request, res: Response) => {
  if (req.params.name === undefined || req.params.name === "") {
    return res.status(400).send({ detail: "Provide a name." });
  }

  let query_str: string = "SELECT url FROM redirect WHERE name=$1";
  let query_items: string[] = [req.params.name];

  pool.query(query_str, query_items, (err: any, sql_res: any) => {
    if (err) return res.status(500).send({ detail: err.stack });

    if (sql_res.rowCount === 0)
      return res.status(400).send({ detail: "Redirect does not exist." });

    return res.redirect(sql_res.rows[0].url);
  });
});

module.exports = router;
