import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connnecttDB } from "./config/db.js";
import productRoutes from "./routes/product.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); //Allows us to accept json data in the req.body
app.use("/api/products", productRoutes);

app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
});

app.listen(PORT, () => {
  connnecttDB();

  console.log(`Server is running on http://localhost:${PORT}`);
});
