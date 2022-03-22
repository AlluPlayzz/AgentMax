const { MessageEmbed } = require("discord.js");

module.exports.run = async(client, message, args) => {
let currentDate = new Date();

  let embed = new MessageEmbed()
  .setTitle("Current Date")
  .setDescription(currentDate.toLocaleString())
  .setColor('BLUE')
  message.channel.send({embeds: [embed]});
    
}

exports.name = "date"