const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Running!');
});

app.listen(3000, () => {
  console.log('success');
});

const { Discord, Client, Intents, Collection, MessageEmbed } = require("discord.js");
const client = new Client({intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]});
const { prefix } = require("./config.json")
const Timeout = new Set();
const ms = require('ms')
client.commands = new Collection();
client.aliases = new Collection();
["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
const db = require("quick.db");
const Database = new db

client.on('ready', () => {
 client.user.setActivity('a?help!', { type: 'WATCHING' })
}) 

 








client.on("messageCreate", async message => {


  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  // If message.member is uncached, cache it.
  if (!message.member) message.member = await message.guild.fetchMember(message);

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (command) {
    if (command.timeout) {
      if (Timeout.has(`${message.author.id}${command.name}`)) {
        let timecommand = ms(command.timeout) / 1000
        let embed = new MessageEmbed().setColor("RED").setTitle(`**Slow down, you can only use this command every ${timecommand}! seconds**`)
        return message.reply({embeds:[embed]})
      } else {
        command.run(client, message, args);
        Timeout.add(`${message.author.id}${command.name}`)
        setTimeout(() => {
          Timeout.delete(`${message.author.id}${command.name}`)
        }, command.timeout);
      }
    } else {
      command.run(client, message, args)
    }
  }
});


















client.login(process.env.token)