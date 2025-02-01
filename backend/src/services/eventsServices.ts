import prismaClient from "../prisma/prisma";
import path from "path";

interface CreateEventsProps {
  title: string;
  description: string;
  zipCode: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  image: { path: string }[];
  categoryId: string;
}

interface CreateCategorysProps {
  name: string;
}

export const CreateEvents = async (data: CreateEventsProps) => {
  const {
    title,
    description,
    city,
    neighborhood,
    number,
    state,
    street,
    zipCode,
    image,
    categoryId,
  } = data;

  const events = await prismaClient.events.create({
    data: {
      title,
      description,
      city,
      neighborhood,
      number,
      state,
      street,
      zipCode,
      image: {
        create: image,
      },
      categoryId,
    },
  });
  return events;
};

export const CategoryEvents = async (data: CreateCategorysProps) => {
  const { name } = data;
  const categories = await prismaClient.categories.create({
    data: {
      name,
    },
  });
  return categories;
};

export const GetCategories = async () => {
  const categories = await prismaClient.categories.findMany();
  return categories;
};
