import express from "express";
import cors from "cors";

import authRoutes from "./routes/authRoutes";
import postRoutes from "./routes/postRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/posts", postRoutes);

export default app;