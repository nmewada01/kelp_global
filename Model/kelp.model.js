const mongoose = require('mongoose');
const accountSchema = new mongoose.Schema({
    code: String,
    name: String,
    balance: Number
});
// Create Account model
const accountModel = mongoose.model('banking', accountSchema);
module.exports = {
    accountModel
}