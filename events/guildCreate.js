
const { MessageEmbed } = require("discord.js")

module.exports = {
	name: "guildCreate",
async execute(guild) {
    
    let joinEmbed = new MessageEmbed()
    .setTitle(`Hello ${guild.name}! Thank you for adding me to your server!`)
    .setDescription("✨ Get started with 'a!help'! We hope you like this bot! Have fun! - *Allu's Utilities Dev Team*")
   .setColor("BLUE")
   .setImage(client.user.displayAvatarURL())

    
    
    
    let channel = guild.channels.cache.find(channel => channel.type === "text" && channel.permissionsFor(guild.me).has("SEND_MESSAGES"))
  try {
    channel.send({embeds: [joinEmbed]});
  } catch (err) {
    console.log(`Error! ${err}`)
  }
}
}
