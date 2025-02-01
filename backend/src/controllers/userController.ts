import { Request, Response } from "express";
import { createUser, loginUser } from "../services/userServices";

export const CreateUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  try {
    const user = await createUser({ name, email, password });
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ error: "User creation failed" });
  }
};

export const LoginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await loginUser({ email, password });

    res.json({ message: "Login successful", user });
  } catch (error) {
    res.status(401).json({ error: "Invalid email or password" });
  }
};

// export const VerifyToken = async (req: Request, res: Response) => {
//   const id = req.userId;
//   const user = await verifyToken(id);
//   res.json({ user });
// };
