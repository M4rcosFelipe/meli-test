import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { ProductApplication } from "./application/ProductApplication";
import { SearchApplication } from "./application/SearchApplication";
import { validateSearchRequest } from "./middlewares/validateSearchRequest";
import pino from "pino-http";
import cors from "cors";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
app.use(
  cors({
    origin: "*",
  })
);
app.use(pino());

app.get("/api/items", async (req: Request, res: Response) => {
  try {
    const queryParam = req.query.q;

    if (!queryParam) {
      res.status(400).send({ error: `missing query param "query"` });
    }

    const offset = req.query.offset ?? 0;
    const query = queryParam;
    const response = await SearchApplication.searchAsync(query, offset);
    res.send(response);
  } catch (error) {
    res.status(500).send({ error: error });
  }
});

app.get("/api/items/:id", async (req: Request, res: Response) => {
  try {
    const itemId = req.params.id;

    const product = await ProductApplication.getProductByIdAsync(itemId);

    res.send(product);
  } catch (error) {
    res.status(404).send({ error: error });
  }
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
