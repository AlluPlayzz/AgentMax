const { MessageEmbed } = require("discord.js");

const ms = require("ms");

module.exports = {
  name: "bidentweet",
  description: "Make biden tweet something.",
  usage: "bidentweet <text>",
category: "Images",
  run: async(client, message, args) => {
    let tweetext = args.join("+") 
if(!tweetext) return message.reply("You cannot make him tweet something that doesn't exist 💀") 
    let tweetembed = new MessageEmbed()
    .setTitle("1 new tweet")
    .setImage(`https://api.popcat.xyz/biden?text=${tweetext}`)
.setColor("BLUE")

    message.channel.send({embeds: [tweetembed]})
  } 
}