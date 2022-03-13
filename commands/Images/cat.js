const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "cat",
  description: "Fetches a cat image!",
category: 'Images',
  timeout: "5000",
  usage: "cat",
  run: async(client, message, args) => {
let json = await fetch("https://some-random-api.ml/animal/cat").then((res) => res.json());
    
    let embed = new MessageEmbed()
    .setTitle("Meow 😺")
    .setImage(json.image)
.setColor("ORANGE")
    message.channel.send({embeds: [embed]})
  }
}