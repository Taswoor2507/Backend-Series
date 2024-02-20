import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
// CORS cross origin resource sharing
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// json
app.use(
  express.json({
    limit: "16kb",
  })
);

// urlencoded
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

// static

app.use(express.static("public"));

// cookie parser
app.use(cookieParser());

export { app };
