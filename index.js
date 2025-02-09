import "dotenv/config";
import cors from "cors";
import express from "express";
import appRoutes from "./routes/app.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/cache", appRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
