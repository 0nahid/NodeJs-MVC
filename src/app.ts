import cors from "cors";
import "dotenv/config";
import express, { Application, Request, Response } from "express";

const app: Application = express();

/* middleware  */
app.use(cors());
app.use(express.json());

/* here will be all the imports routes */
import userRouter from "./routes/apiRoute";

/* here will be the all the routes */
app.get("/", (req: Request, res: Response) => {
  // res.send({ message: "Server is running", status: 200 });
  res.sendFile(__dirname + "/public/index.html");
});


/* Here is the User Routes */
app.use("/api", userRouter);

export { app };
