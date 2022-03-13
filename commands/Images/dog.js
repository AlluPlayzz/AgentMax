const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "dog",
  description: "Fetches a dog image!",
category: 'Images',
  timeout: "5000",
  usage: "cat",
  run: async(client, message, args) => {
let json = await fetch("https://some-random-api.ml/animal/dog").then((res) => res.json());
    
    let embed = new MessageEmbed()
    .setTitle("Bow! 🐶")
    .setImage(json.image)
.setColor("BROWN")
    message.channel.send({embeds: [embed]})
  }
}