const mongoose = require('mongoose');

const GuildMuteroleSchema = new mongoose.Schema({
	guild_id: String,
	prefix: String, 
});

module.exports = mongoose.model("GuildMuterole", GuildMuteroleSchema);