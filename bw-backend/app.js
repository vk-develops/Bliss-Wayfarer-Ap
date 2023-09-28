import express from "express";
import dotenv from "dotenv";
import chatRoute from "./routes/chatRoute.js";
dotenv.config();

//app inint
const app = express();
const PORT = process.env.PORT || 8081;

//inbuilt middlewares
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({ message: "Status ok" });
});

app.use("/", chatRoute);

//app listen
app.listen(PORT, () => {
    console.log(`Server started and running on port ${PORT}`);
});
