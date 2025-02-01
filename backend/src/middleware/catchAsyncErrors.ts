import { Request, Response, NextFunction, RequestHandler } from "express";

// Define o tipo genérico para qualquer função que seja um RequestHandler
type AsyncRequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any>;

export const catchAsyncErrors = (
  theFunction: AsyncRequestHandler
): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(theFunction(req, res, next)).catch(next);
  };
};
