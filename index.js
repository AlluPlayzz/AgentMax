/*================================================*/
//Express Server
/*================================================*/
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Running!')
});
app.listen(3000, () => {
  console.log('Running on https://localhost/3000');
});

/*================================================*/
//Setting Up Pkgs
/*================================================*/

require("dotenv").config();
const fs = require("fs");
const { Client, Intents, Collection } = require("discord.js");

const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES
	]
});

/*================================================*/
//Initialising Chat Commands
/*================================================*/

const prefix = "a?"
client.chatcommands = new Collection();
const chatcommands = fs.readdirSync("./ChatCommands").filter(file => file.endsWith(".js"));
for(const file of chatcommands) {
const chatcommandName = file.split(".")[0]
const chatcommand = require(`./ChatCommands/${chatcommandName}`)
client.chatcommands.set(chatcommandName, chatcommand)
}

client.on("messageCreate", message => {
  if(message.content.startsWith(prefix)) {
const args = message.content.slice(prefix.length).trim().split(/ + /g)
const chatcommandName = args.shift()
const chatcommand = client.chatcommands.get(chatcommandName)
if(!chatcommand) return
chatcommand.run(client, message, args)
  }
})

/*================================================*/
//Intializing SlashCommands
/*================================================*/

const commandFiles = fs.readdirSync("./SlashCommands").filter(file => file.endsWith(".js"));

const commands = [];

client.commands = new Collection();

for (const file of commandFiles) {
	const command = require(`./SlashCommands/${file}`);
	commands.push(command.data.toJSON());
	client.commands.set(command.data.name, command);
}

const eventFiles = fs
	.readdirSync("./events")
	.filter(file => file.endsWith(".js"));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, commands));
	} else {
		client.on(event.name, (...args) => event.execute(...args, commands));
	}
}

/*================================================*/
//Logging In
/*================================================*/



      client.login(process.env.token);
