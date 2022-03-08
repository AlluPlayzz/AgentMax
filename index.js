const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Running!');
});

app.listen(3000, () => {
  console.log('success');
});

const TOKEN = process.env['token']

const mongoose = require("mongoose")
mongoose.connect(process.env['MONGO'], { useNewUrlParser: true}).then(console.log('🌿 Connected to Mongo DB!'));


const { Discord, Client, Collection, Intents } = require("discord.js");
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES"] }) 
const chalk = require("chalk");

client.on("ready", () => {
console.log("Bot is online!")
});





client.on("messageCreate", message => {
  if(message.content === "a?ping") {
    message.channel.send("Pong! 🏓")
  }
});


client.login(TOKEN)