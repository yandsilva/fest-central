import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import userRoutes from "./routes/userRoutes";
import eventRouter from "./routes/eventsRouter";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config({ path: path.resolve(__dirname, "../.env") });

app.use(
  cors({
    origin: [process.env.FESTCENTRAL_URL || "http://localhost:5173"],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/user", userRoutes);
app.use("/api/v1/events", eventRouter);
app.use("/images", express.static(path.join(__dirname, "uploads")));

export default app;
