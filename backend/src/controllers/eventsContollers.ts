import { Request, Response } from "express";
import {
  CreateEvents,
  CategoryEvents,
  GetCategories,
  GetEvents,
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
      date,
      time,
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
      date,
      time,
    });
    res.status(201).json({ message: "Events created successfully", events });
  } catch (error) {
    res.status(500).json({ error: "Events creation failed" });
  }
};

export const getEvents = async (req: Request, res: Response) => {
  try {
    const events = await GetEvents();
    res.status(201).json({ message: "Successfully retrieved events", events });
  } catch (error) {
    res.status(500).json({ error: "Events failed" });
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
