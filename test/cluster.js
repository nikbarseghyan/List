const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const src     = require("../src");
const port    = process.env.PORT || 3011;

const highProcc = () => Array.from(Array(numCPUs )).map(cluster.fork);
const lowProcc  = () => src.listen(port);


cluster.isMaster ? highProcc() : lowProcc();
cluster.on("exit", () => cluster.fork());
