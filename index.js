const http = require("http");
const fs = require("fs");

function readFile(file, url, res) {
  fs.readFile(file, (err, data) => {
    if (err) {
      return readFile("404.html", url, res);
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(data);
  });
}

http
  .createServer((req, res) => {
    const url = new URL(req.url, "http://localhost:8080/");
    const fileName = `./html/${url.pathname}.html`;

    if (url.pathname !== "/") {
      readFile(fileName, url, res);
    } else {
      readFile("./html/index.html", url, res);
    }
  })
  .listen(8080);
