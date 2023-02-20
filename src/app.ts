import "express-async-error";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import helmet from "helmet";

const app = express();

import notFound from "./middlewares/not-found";
import errorHandle from "./middlewares/error-handle";
import homeRoutes from "./routes/homeRoutes";
import userRoutes from "./routes/userRoutes";
import tokenRoutes from "./routes/tokenRoutes";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use("/api", homeRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tokens", tokenRoutes);
app.use(errorHandle);
app.use(notFound);

export default app;
