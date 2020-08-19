function parseMessage(message) {
  const buffer = Buffer.from(message.buffer);
  return buffer;
}

module.exports = parseMessage;
