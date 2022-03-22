const { MessageEmbed } = require("discord.js")
const fetch = require("node-fetch")

exports.name = "dog"
exports.run = async(client, message, args) => {
    let json = await fetch("https://some-random-api.ml/animal/dog").then(res => res.json());
   
   const fetchedImage = new MessageEmbed()
   .setDescription(json.fact)
   .setImage(json.image)
   .setColor("GREEN")
   .setFooter({text: "API: some-random-api.ml"})
   
   message.channel.send({embeds: [fetchedImage]})
   
   
}