const http = require("http");
const server = http.createServer((req, resp) => {
  if (req.url === "/") {
    resp.end("home page");
  }
  if (req.url === "/contact") {
    resp.end("contact page");
  }
  if (req.url === "/about") {
    resp.end("about page");
  }
  if (req.url === "/new") {
    resp.end("new page");
  } else {
    resp.end("not  found");
  }
});

server.listen(5000, () => {
  console.log("sreer wprk;ldgkj");
});
