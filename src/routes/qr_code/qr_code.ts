var qr = require("qr-image");
import express, { Response, Request } from "express";

const router = express.Router();
router.use(express.json());

router.get("/", async (req: Request, res: Response) => {
  let url: string = req.body.url;

  if (url === undefined || url === "")
    return res.send({ detail: "Provide URL" });

  var qr_png = qr.image(url, { type: "png" });
  res.setHeader("Content-type", "image/png");
  qr_png.pipe(res);
  res.send(qr_png);
});

module.exports = router;
