const mongoose = require('mongoose');

const UserBalanceSchema = new mongoose.Schema({
	message_author_id: String,
	balance: { Number, default: 0 },
});

module.exports = mongoose.model("UserBalance", UserBalanceSchema);


