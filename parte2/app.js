const express = require("express");
const path = require("path");

const app = express();
const puerto = 3000;

app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "default-src 'self' http: https: data: 'unsafe-inline' 'unsafe-eval'; connect-src *; img-src * data:; style-src 'self' 'unsafe-inline' https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' https:",
  );
  next();
});

app.use(express.static(path.join(__dirname, "parte2")));

app.listen(puerto, function () {
  console.log("corriendo en:  http://localhost:3000");
});
