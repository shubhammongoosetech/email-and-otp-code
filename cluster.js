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

/**
 * Here is the step-by-step flow of code execution for the provided Node.js cluster code:

1. Module Imports & Setup
The script imports the required modules:

http to create an HTTP server.

cluster to use Node.js clustering capabilities.

os to get the number of CPU cores.

dotenv to load environment variables from a .env file.

numCPUs is set to the total number of CPU cores on the machine.

Function bootstrap() creates an HTTP server that listens on port 3000 and responds with the worker process ID.

2. Check Environment Variable NODE_TYPE
The script checks process.env.NODE_TYPE:

If it is "Cluster", the program runs in cluster mode.

Otherwise, it logs "Not running in Cluster mode" and does nothing else.

3. Cluster Mode Execution
a. Master (Primary) Process
If cluster.isPrimary is true (meaning the current process is the master process):

Logs the master process PID.

It forks multiple worker processes, one per CPU core (numCPUs times).

After each cluster.fork() call, it logs "check".

Sets up an event listener on 'exit' to detect when a worker dies.

When a worker exits unexpectedly, it:

Logs that the worker died and that it is respawning.

Forks a new worker to replace the dead one (auto-recovery).

b. Worker Process
When the master forks, the new worker processes start executing the same script.

For each forked worker:

cluster.isPrimary is false.

The worker calls bootstrap():

Creates an HTTP server listening on port 3000.

Server responds to requests with Handled by worker process <worker-pid>.

Logs "Worker process started with pid: <worker-pid>".

4. HTTP Request Handling
Multiple worker processes listen on the same port (3000).

When the server receives a request, an OS-level load balancer distributes the request to one of the worker processes.

The worker that handles the request sends a response with its process.pid.

Summary of Flow
Step	Description
Start process	Process starts
Check NODE_TYPE	If "Cluster" proceed; otherwise, log "Not running"
Is master process?	Yes: fork workers equal to CPU count
For each worker forked	Worker runs same script but with cluster.isPrimary false
Worker runs bootstrap()	Starts HTTP server, logs its PID
Incoming HTTP requests	Distributed by OS across workers
Worker handles request	Responds with PID indicating which worker served request
Worker crashes	Master listens for exit, respawns new worker
Example Workflow:
Let’s assume 4 CPU cores.

Master process forks 4 worker processes.

Worker PIDs might be: 1010, 1011, 1012, 1013.

On HTTP requests, responses can be:

"Handled by worker process 1010"

"Handled by worker process 1011"

… and so on.

If, say, worker 1012 crashes, the master logs it died and immediately forks a new worker.

This flow allows your Node.js application to handle more incoming requests efficiently using all CPU cores, while maintaining reliability by respawning workers if they fail.

Let me know if you want me to explain any part further!
 */
