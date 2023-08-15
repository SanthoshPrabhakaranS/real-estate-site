import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { authRoute } from "./routes/userRoute.js";
import { residencyRoutes } from "./routes/residencyRoute.js";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//Routes
app.use("/auth", authRoute);
app.use("/residency", residencyRoutes);

//Connecting MongoDB
const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
