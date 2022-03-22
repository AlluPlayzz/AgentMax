exports.run = (client, message, args) => {
	message.channel.send(`Pong! \n ${client.ws.ping}ms is the client's latency!`)
}


