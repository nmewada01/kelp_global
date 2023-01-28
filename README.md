# kelp_global

I build a banking application where I use command-line interface to perform given operations. In this project I use `MONGO ATLAS DATABASE` to store the data.

![Kelp-–-Home](https://user-images.githubusercontent.com/101567054/215272288-e7b3c542-e161-4fb0-a704-6cb871ea4c0d.png)

## Let's Discuss Some Points :

#### **Inputs Given** :

```js
CREATE ACC001 KELP
DEPOSIT ACC001 10000
WITHDRAW ACC001 1000
CREATE ACC002 FVTPL
DEPOSIT ACC002 10000
WITHDRAW ACC002 2000
BALANCE ACC002
BALANCE ACC001
```

**And We want to get this output :**

```js
FVTPL 8000
KELP 9000
```

**Run this Command in Terminal**

| Action           |             Command |      Balance |
| :--------------- | ------------------: | -----------: |
| Create Account   |  CREATE ACC001 KELP |    Balance=0 |
| Deposit Account  | DEPOSIT ACC001 1000 | Balance=1000 |
| Withdraw Account | WITHDRAW ACC001 500 |  Balance=500 |

_From the above table you understand how my code is working and you will see the output in console. also you will run the `BALANCE <code>` to see the balance and the name of the account holder._

### **Commands to run for specific operation**

```js
node index.js CREATE <code> <name> = create account
node index.js DEPOSIT <code> <amount> = deposit account
node index.js WITHDRAW <code> <amount> = withdraw account
node index.js BALANCE <code> = show balance
```

**_npm packages_**

```js
npm install mongoose
npm install commander
npm install dotenv
```

_click here to know about npm packages_ : [commander](https://www.npmjs.com/package/commander) , [mongoose](https://www.npmjs.com/package/mongoose) , [dotenv](https://www.npmjs.com/package/dotenv)


