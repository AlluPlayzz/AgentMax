module.exports = {
  name: "ping",
  description: "Get the client's latency",
  usage: "ping",
  aliases: ["p"],
category: "Information",
  timeout: "2000",
  run: async(client, message, args) => {
    message.channel.send(`Pong! \n ${client.ws.ping}ms is the client's ping!`)
  }
}