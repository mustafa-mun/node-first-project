const express = require("express");
const app = express();
const fileName = `${__dirname}/html/`;

app.get("/", (req, res) => {
  res.sendFile(`${fileName}index.html`);
});

app.get("/about", (req, res) => {
  res.sendFile(`${fileName}about.html`);
});

app.get("/contact-me", (req, res) => {
  res.sendFile(`${fileName}contact-me.html`);
});

app.get("/contact", (req, res) => {
  res.redirect("/contact-me");
});

app.use((req, res) => {
  res.sendFile(`${fileName}404.html`);
});

app.listen(3000);
