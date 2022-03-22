const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")
const fetch = require("node-fetch")

module.exports.run = async(client, message, args) => {
let json = await fetch("https://badboy.is-a.dev/api/json/shitpost").then(res => res.json());
  const upvotes = json.upvotes
const comments = json.comments

	let meme = new MessageEmbed()
	.setURL(json.subreddit)
	.setTitle(json.title)
	.setColor("GREEN")
	.setImage(json.image)
	.setFooter(`🔼 ${upvotes} & 💬 ${comments}`)


message.channel.send({embeds: [meme]})




} 