const { MessageButton, MessageEmbed, MessageActionRow } = require("discord.js");

const ms = require("ms");

module.exports = {
  name: "rps",
  description: "Play rock paper scissors against me hehe.",
  usage: "rps <user/optional>",
  timeout: "7000",
  category: "Fun",
  run: async(client, message, args) => {

let replies = ["I choose.. Rock!", "I choose.. Paper!", "I choose... Scissors!"]


    
    const chooseembed = new MessageEmbed()
    .setTitle("Choose an option!")
    .setDescription("Choose an option to continue")
    .setFooter(`Choosing.`)
.setColor("RED")
    
    const botembed = new MessageEmbed()
    .setTitle("The bot is choosing an option....")
      .setDescription("Wait until I choose an option")
    .setColor("GREEN")

const rpsbuttons = new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setCustomId("Rock")
      .setLabel("Rock")
      .setStyle("SUCESS")

.setEmoji("🪨"),
new MessageButton()
      .setCustomId("Paper")
      .setLabel("Paper")
      .setStyle("SUCESS")

.setEmoji("📄"),
      
new MessageButton()
      .setCustomId("Scissors")
      .setLabel("Scissors")
     .setStyle("SUCESS")

.setEmoji("✂️"),

    );
  }



}