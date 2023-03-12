import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.get(
  "/dealers",
  createProxyMiddleware({
    target:
      "https://bb61co4l22.execute-api.us-west-2.amazonaws.com/development",
    changeOrigin: true,
    onProxyRes: function (proxyRes, req, res) {
      proxyRes.headers["access-control-allow-origin"] = "*";
    },
  })
);

app.get(
  "/vehicles/:bac",
  createProxyMiddleware({
    target:
      "https://bb61co4l22.execute-api.us-west-2.amazonaws.com/development",
    changeOrigin: true,
    onProxyRes: function (proxyRes, req, res) {
      proxyRes.headers["access-control-allow-origin"] = "*";
    },
  })
);

export default app;
module.exports = app;
