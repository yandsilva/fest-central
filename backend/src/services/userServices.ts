import bcrypt from "bcrypt";
import prismaClient from "../prisma/prisma";
import { sign } from "jsonwebtoken";

interface CreateUserProps {
  name: string;
  email: string;
  password: string;
}
interface LoginUserProps {
  email: string;
  password: string;
}

export const createUser = async (data: CreateUserProps) => {
  const { name, email, password } = data;

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prismaClient.user.create({
    data: { name, email, password: hashedPassword },
  });
  return user;
};

export const loginUser = async (data: LoginUserProps) => {
  const { email, password } = data;
  const user = await prismaClient.user.findUnique({ where: { email } });
  if (!user) {
    throw new Error("Usuario ou Senha Incorretos");
  }
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Usuario ou Senha Incorretos");
  }

  const token = sign(
    {
      id: user.id,
      name: user.name,
      email: user.email,
    },
    process.env.JWT_SECRET || "açlskdjfçaklsdjfalçksdfjklsdf",
    {
      subject: user.id,
      expiresIn: "1h",
    }
  );
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    token,
  };
};

// export const verifyToken = async (id: string) => {
//   const response = await prismaClient.user.findUnique({
//     where: { id },
//     select: { id: true, name: true },
//   });
//   return response;
// };
