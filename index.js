const http = require("http");
const fs = require("fs");

function readFile(file, url, res) {
  fs.readFile(file, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      return readFile("404.html", url, res);
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
}

http
  .createServer((req, res) => {
    const url = new URL(req.url, "http://localhost:8080/");
    const file = `.${url.pathname}.html`;

    if (url.pathname !== "/") {
      readFile(file, url, res);
    } else {
      readFile("index.html", url, res);
    }
  })
  .listen(8080);
