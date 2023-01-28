const commander = require('commander');
const { db } = require('./Config/database');
const { createKelpAccount, depositKelpAccount } = require('./Controller/kelp.controller');
require("dotenv").config();
// Connect to MongoDB Atlas
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB Atlas');
});
// create Account
commander
    .command('create <code> <name>')
    .description('Create a new account with zero balance')
    .action(createKelpAccount);

// Deposit amount
commander
    .command('deposit <code> <amount>')
    .description('Deposit an amount to an existing account')
    .action(depositKelpAccount);
    
commander.parse(process.argv);