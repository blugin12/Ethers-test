import { Command } from 'commander';
import { getBalance } from './balance';
import { sendETH } from './send';
import { checkTransaction } from './transaction';
const program = new Command ();


program
  .name('ethers')
  .description('Build CLI app using etthers.js and commander')
  .version('0.1.0');


program
.command('balance <address>')
.description('Show balance of ETH')
.action(async (address) => {
    const balance = await getBalance(address);
  console.log(`ETH of ${address} --> ${balance}`);
});

program
.command('send <amount> <address>')
.description('Show amount tranfer')
.action(async (amount, recipient) => {
    const tx = await sendETH(amount, recipient)

  console.log(`Transaction Hash`, tx.hash);
  
});

program
.command('checktx <hash>')
.description('send the Transaction')
.action(async (hash) => {
  const checktx = await checkTransaction(hash);
  console.log(`Recipt of (hash) ${hash}`, checktx);
});

program.parse();
