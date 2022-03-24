const { SlashCommandBuilder } = require("@discordjs/builders");
const { Permissions } = require("discord.js");
const GuildMuterole = require("../models/GuildMuterole");

module.exports = {
	data: new SlashCommandBuilder()
		.setName("setmuterole")
		.setDescription("Set the mute role for this server.")
		.addRoleOption(option => option
			.setName("role")
			.setDescription("The role to be set as the muted role.")
			.setRequired(true)
		),
	async execute(interaction) {
		
		// Check for admin permissions
		if (!interaction.member.permissions.has([Permissions.FLAGS.ADMINISTRATOR])) {
			interaction.reply("You do not have permission to use this command!");
			return;
		}

		GuildMuterole.findOne({ guild_id: interaction.guild.id }, (err, muterole) => {
			if (err) {
				console.log(err);
				interaction.reply("An error occurred while trying to set the muted role!");
				return;
			}

			if (!muterole) {
				muterole = new GuildMuterole({
					guild_id: interaction.guild.id,
					mute_role: interaction.options.getRole("role").id
				});
			} else {
				muterole.mute_role = interaction.options.getRole("role").id;
			}

			muterole.save(err => {
				if (err) {
					console.log(err);
					interaction.reply("An error occurred while trying to set the muted role!");
					return;
				}

				interaction.reply(`The muted role for this server has been set to ${interaction.options.getRole("role")}`);
			})
		})

	}
}