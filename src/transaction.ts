import { ethers } from "ethers";
import * as dotenv from 'dotenv';
dotenv.config();

export const checkTransaction = async ( hash : string ): Promise<ethers.providers.TransactionReceipt> => {
    const provider = new ethers.providers.InfuraProvider(
        "goerli",
        process.env.API_KEY
    )
    const Recipient = await provider.getTransactionReceipt(hash)
    return Recipient;
}