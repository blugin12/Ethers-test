import { ethers, providers, Wallet } from "ethers";
import * as dotenv from "dotenv";
dotenv.config();
import { getBalance } from "./balance";

export const sendETH = async (
    amount: string, 
    recipient: string
): Promise<ethers.providers.TransactionResponse> => {
    const provider = new ethers.providers.InfuraProvider(
        "goerli",
        process.env.API_KEY
    );
    if (!process.env.PRIVATE_KEY) throw new Error ("NO PRIVATE KEY");

    const wallet = new Wallet (process.env.PRIVATE_KEY, provider);
    const signer = wallet.connect(provider);

    const balance = await getBalance(wallet.address);

    console.log(`Balance of sender: ${balance} ETH`);

    const tx = {
        from: wallet.address,
        to: recipient,
        value: ethers.utils.parseEther(amount),
    };
    
    const Transaction = await signer.sendTransaction(tx);
    return Transaction;
};