const commander = require('commander');
const { db } = require('./Config/database');
const { createKelpAccount, depositKelpAccount, withdrawKelpAccount, showKelpBalance } = require('./Controller/kelp.controller');


// Connect to MongoDB Atlas
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB Atlas');
});
// create Account
commander
    .command('CREATE <code> <name>')
    .description('Create a new account with zero balance')
    .action(createKelpAccount);

// Deposit amount
commander
    .command('DEPOSIT <code> <amount>')
    .description('Deposit an amount to an existing account')
    .action(depositKelpAccount);

// Withdraw amount
commander
    .command('WITHDRAW <code> <amount>')
    .description('Withdraw an amount from an existing account')
    .action(withdrawKelpAccount);

// Show balance
commander
    .command("BALANCE <code>")
    .description("Show the current balance of an existing account")
    .action(showKelpBalance);

commander.parse(process.argv);