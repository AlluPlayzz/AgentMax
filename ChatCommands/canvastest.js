const { MessageEmbed, MessageAttachment } = require("discord.js")
const Canvas = require("canvas")

exports.run = async(client, message, args) => {
  const text = args.join(" ")
if(!text) return message.reply("Provide text!1!1")
  
const canvas = Canvas.createCanvas(800, 250);
  const ctx = canvas.getContext("2d");

  const background = await Canvas.loadImage("./test.png");
ctx.drawImage(background, 0, 0, canvas.height);

  ctx.strokeStyle = "#9B59B6" 
  ctx.strokeRect(0, 0, canvas.width, canvas.height);

  ctx.font = "38px cursive";
  ctx.textAlign = "center";
  ctx.fillStyle = "#FFFFFF"
ctx.fillText(`${text}`, canvas.width / 2, canvas.height / 1.2);

  const attachment = new MessageAttachment(canvas.toBuffer(), "test.png");

  message.channel.send({files: ["attachment://test.png"]});
  
  
}