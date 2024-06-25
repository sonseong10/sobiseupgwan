import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import postRouter from "./router/post.js";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use(morgan("combined"));

app.use("/posts", postRouter);

app.listen(8080);
