import cors from "cors";
import proxy from "express-http-proxy";
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

app.use(
  "/",
  proxy("https://bb61co4l22.execute-api.us-west-2.amazonaws.com", {
    proxyReqPathResolver: function (req) {
      // console.log("req path", req.path);
      return "/development/" + req.path;
    },
  })
);

export default app;
