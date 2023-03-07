import cors from "cors";
import express from "express";
import * as fs from "fs";
import path from "path";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: "http://localhost:4200",
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/dealers", async (req, res) => {
  const data = fs.readFileSync(
    path.resolve(__dirname, "dealers.json"),
    "utf-8"
  );
  res.send(data);
});

app.get("/vehicles/:bac", async (req, res) => {
  const data = fs.readFileSync(
    path.resolve(__dirname, "vehicles.json"),
    "utf-8"
  );
  const vehicles: any[] = JSON.parse(data);
  res.send(vehicles.filter((v) => v.bac === req.params.bac));
});

export default app;
