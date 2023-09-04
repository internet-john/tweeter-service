const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const options = {
  headers: {
    authorization: `Bearer `,
  },
};

const server = http.createServer((req, res) => {
  req;
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
