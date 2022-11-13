import { Request, Response, NextFunction } from "express";

let logger: (req: Request, res: Response, next: NextFunction) => any =
  function (req: Request, res: Response, next: NextFunction) {
    let ip: string = req.ip;
    next();
  };

module.exports = {
  logger,
};
