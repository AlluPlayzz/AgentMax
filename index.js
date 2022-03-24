/*================================================*/
//Express Server
/*================================================*/
const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.redirect("hello")
});
app.listen(3000, () => {
});




/*================================================*/
//Setting Up Pkgs
/*================================================*/

require("dotenv").config();
const fs = require("fs");
const { Client, Intents, Collection, MessageEmbed } = require("discord.js");

const client = new Client({
	intents: [
		Intents.FLAGS.GUILDS,
		Intents.FLAGS.GUILD_MESSAGES,
		Intents.FLAGS.GUILD_MEMBERS,
Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
		Intents.FLAGS.GUILD_BANS,
		Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
		Intents.FLAGS.GUILD_PRESENCES

	]
});

const Database = require("./config/database.js");

const db = new Database();

db.connect();

const models = fs.readdirSync("./models").filter(file => file.endsWith(".js"));
















/*================================================*/
//Initialising Chat Commands
/*================================================*/

const prefix = "a!"
client.chatcommands = new Collection()
const chatcommands = fs.readdirSync(`./ChatCommands/`).filter(file => file.endsWith(".js"));
for(const file of chatcommands) {
const chatcommandName = file.split(".")[0]
const chatcommand = require(`./ChatCommands/${chatcommandName}`)
client.chatcommands.set(chatcommandName, chatcommand)
}


client.on("messageCreate", async message => {
  if(message.content.startsWith(prefix)) {
const args = message.content.slice(prefix.length).trim().split(/ + /g)
const chatcommandName = args.shift()
const chatcommand = client.chatcommands.get(chatcommandName)
if(!chatcommand) return;
chatcommand.run(client, message, args)
	}
});	 


client.on('ready', () => {
 client.user.setActivity(`a!help | ${client.guilds.cache.size} servers`, { type: 'STREAMING' })
client.user.setStatus('online')
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
