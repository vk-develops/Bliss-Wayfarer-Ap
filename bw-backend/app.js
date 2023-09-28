import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import chatRoute from "./routes/chatRoute.js";
import authRoute from "./routes/authRoute.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
dotenv.config();

//db connect
connectDB();

//app inint
const app = express();
const PORT = process.env.PORT || 8081;

//inbuilt middlewares
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.status(200).json({ message: "Status ok" });
});

app.use("/", chatRoute);
app.use("/api/users", authRoute);

//custom middlewares
app.use(notFound);
app.use(errorHandler);

//app listen
app.listen(PORT, () => {
    console.log(`Server started and running on port ${PORT}`);
});
