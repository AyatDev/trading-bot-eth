import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);

async function monitorPrices() {
    console.log("Bot started — monitoring prices...");
    
    setInterval(async () => {
        const gasPrice = await provider.getGasPrice();
        console.log(`Gas Price: ${ethers.utils.formatUnits(gasPrice, "gwei")} gwei`);
        // Add arbitrage logic here
    }, 5000);
}

monitorPrices().catch(console.error);
```
