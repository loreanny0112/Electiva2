const express = require("express");
const client = require("prom-client");

const app = express();
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ register: client.register });

app.get("/", (req, res) => {
  res.send("Hola Mundo con métricas!");
});

// Endpoint para Prometheus
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(3001, () => {
  console.log("App corriendo en http://localhost:3001");
});