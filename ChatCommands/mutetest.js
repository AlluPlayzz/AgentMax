/*const Discord = require('discord.js');
const GuildMuterole = require('../models/GuildMuterole');

exports.run = async(client, message, args) => {
const guildMuterole = await GuildMuterole.findOne({ guild_id: message.guild.id });

const muted = guildMuterole.muterole


		if (!guildMuterole && !guildMuterole.muterole) {
			return message.reply("A mute role hasn't been set!")
    }

  message.channel.send("tested the mute system.").then(message.member.roles.add(`${muted}`));


  
} */