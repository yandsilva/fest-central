import prismaClient from "../prisma/prisma";

interface CreateEventsProps {
  name: string;
  date: string;
  time: string;
  description: string;
  zipCode: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  image: { path: string }[];
  ticketName: string;
  ticketPrice: string;
  complement: string;
  categoriesId: string;
}

interface CreateCategorysProps {
  name: string;
}

export const CreateEvents = async (data: CreateEventsProps) => {
  const {
    name,
    date,
    time,
    description,
    city,
    neighborhood,
    number,
    state,
    street,
    zipCode,
    image,
    ticketName,
    complement,
    ticketPrice,
    categoriesId,
  } = data;
  const events = await prismaClient.events.create({
    data: {
      name,
      date,
      time,
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
      complement,
      ticketName,
      ticketPrice,
      categoriesId,
    },
  });
  return events;
};

export const GetEvents = async () => {
  const events = await prismaClient.events.findMany();
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
