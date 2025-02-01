import { Request, Response } from "express";
import {
  CreateEvents,
  CategoryEvents,
  GetCategories,
} from "../services/eventsServices";

export const createEvents = async (req: Request, res: Response) => {
  try {
    const {
      title,
      description,
      city,
      neighborhood,
      number,
      state,
      street,
      zipCode,
      categoryId,
    } = req.body;

    const image_filename = req.files as Express.Multer.File[];
    const image = image_filename.map((file) => {
      return {
        path: file.filename,
      };
    });

    const events = await CreateEvents({
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
    });
    res.status(201).json({ message: "Events created successfully", events });
  } catch (error) {
    res.status(500).json({ error: "Events creation failed" });
  }
};

export const categoryEvents = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const events = await CategoryEvents({ name });
    res.status(201).json({ message: "Events created successfully", events });
  } catch (error) {
    res.status(500).json({ error: "Events creation failed" });
  }
};

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await GetCategories();
    res
      .status(201)
      .json({ message: "Successfully retrieved categories", categories });
  } catch (error) {
    res.status(500).json({ error: "Categories failed" });
  }
};
