import "dotenv/config";
import experss, { Application, NextFunction, Request, Response } from "express";
import notesRoutes from "./routes/notes";
import cors from 'cors'

const app: Application = experss();
app.use(experss.json())
app.use(cors())

app.use("/notes", notesRoutes);

app.use((req, res, next) => {
  next(Error("EndPoint not found"));
});

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.error(error);
  res.status(500).json({ error: error });
});

export default app;
