import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import {
  categoryEvents,
  createEvents,
  getCategories,
  getEvents,
} from "../controllers/eventsContollers";
import multer from "multer";
import prismaClient from "../prisma/prisma";

import uploadsConfig from "../config/multer";
import { isAuthenticatedUser } from "../middleware/auth";
const uploads = multer(uploadsConfig);

const eventRouter = Router();

eventRouter.post(
  "/register",
  isAuthenticatedUser,
  uploads.array("image"),
  createEvents
);
eventRouter.get("/get-events", getEvents);
eventRouter.post("/register-category", categoryEvents);
eventRouter.get("/get-category", getCategories);

eventRouter.get("/verify", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Token não fornecido" });
    }
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET as string
    ) as jwt.JwtPayload & { id: string };

    const user = await prismaClient.user.findUnique({
      where: { id: decoded.id },
    });

    if (!user) {
      return res.status(404).json({ error: "Usuário não encontrado" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ error: "Erro ao verificar o token" });
  }
});

export default eventRouter;
