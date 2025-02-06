import prismaClient from "../prisma/prisma";

interface CreateEventsProps {
  title: string;
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
  categoriesId: string;
  ticketName: string;
  complement: string;
  ticketPrice: string;
}

interface CreateCategorysProps {
  name: string;
}

export const CreateEvents = async (data: CreateEventsProps) => {
  const {
    title,
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
    categoriesId,
    ticketName,
    complement,
    ticketPrice,
  } = data;

  const events = await prismaClient.events.create({
    data: {
      title,
      date,
      time,
      description,
      city,
      neighborhood,
      number,
      state,
      street,
      zipCode,
      categoriesId,
      image: {
        create: image,
      },
      ticketName,
      complement,
      ticketPrice,
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
