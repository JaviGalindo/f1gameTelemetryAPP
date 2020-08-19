const dgram = require("dgram");
const client = dgram.createSocket("udp4");
const { port } = require("./config");
const parseMessage = require("./utils/parseMessage");

function start() {
  client.on("listening", () => {
    const address = client.address();
    console.log(`UDP Client listening on ${address.address}:${address.port}`);
    client.setBroadcast(true);
  });

  client.on("message", (m) => parseMessage(m));
  client.bind(port);
}

function stop() {
  return client.close();
}
