const http = require("http");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const dotenv = require("dotenv").config();

function bootstrap() {
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end(`Handled by worker process ${process.pid}\n`);
    })
    .listen(3000);

  console.log(`Worker process started with pid: ${process.pid}`);
}

if (process.env.NODE_TYPE === "Cluster") {
  if (cluster.isPrimary) {
    console.log(`Primary process ${process.pid} is running`);

    // Fork workers — one per CPU
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
      console.log("check");
    }

    cluster.on("exit", (worker, code, signal) => {
      console.log(`Worker ${worker.process.pid} died. Respawning...`);
      cluster.fork();
    });
  } else {
    // Worker runs the server
    bootstrap();
  }
} else {
  console.log("Not running in Cluster mode");
}
