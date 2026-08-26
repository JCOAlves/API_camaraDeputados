import express, { type Express, type Request, type Response } from 'express';
import cors from "cors";
import Rotas from "./Rotas.ts";

const app: Express = express();
app.use(cors()) // Importação para habilitar requisições do frontend

app.get('/', (req: Request, res: Response) => {
  res.redirect("/produtos")
});

app.use("/produtos", Rotas);

app.listen(3000, () => {
  console.log("Backend rodando na porta 3000");
});
