const { MessageEmbed } = require("discord.js")
const fetch = require("node-fetch")

exports.name = "cat"
exports.run = async(client, message, args) => {
    let json = await fetch("https://some-random-api.ml/animal/cat").then(res => res.json());
   
   const fetchedImage = new MessageEmbed()
   .setDescription(json.fact)
   .setImage(json.image)
   .setColor("ORANGE")
   .setFooter({text: "API: some-random-api.ml"})
   
   message.channel.send({embeds: [fetchedImage]})
   
   
}