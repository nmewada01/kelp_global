const { accountModel } = require("../Model/kelp.model");
const createKelpAccount = (code, name) => {
    const newAccount = new accountModel({ code: code, name: name, balance: 0 });
    newAccount.save((err, account) => {
        if (err) return console.error(err);
        console.log(`Account created: ${account}`);
    });
}

const depositKelpAccount = (code, amount) => {
    accountModel.findOne({ code: code }, (err, account) => {
        if (err) return console.error(err);
        if (!account) return console.log(`Account not found: ${code}`);
        account.balance += parseFloat(amount);
        account.save((err, updatedAccount) => {
            if (err) return console.error(err);
            console.log(`Amount deposited: ${amount}`);
            console.log(`New balance: ${updatedAccount.balance}`);
        });
    });
}
module.exports = {
    createKelpAccount,
    depositKelpAccount
}