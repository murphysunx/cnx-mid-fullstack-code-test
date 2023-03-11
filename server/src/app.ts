import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  createProxyMiddleware({
    target:
      "https://bb61co4l22.execute-api.us-west-2.amazonaws.com/development",
    changeOrigin: true,
    onProxyRes: function (proxyRes, req, res) {
      proxyRes.headers["access-control-allow-origin"] = "http://localhost:4200";
    },
  })
);

export default app;
