const mongoose = require('mongoose');

const GuildMuteroleSchema = new mongoose.Schema({
	guild_id: String,
	mute_role: String, 
});

module.exports = mongoose.model("GuildMuterole", GuildMuteroleSchema);