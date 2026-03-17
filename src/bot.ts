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

---

## ریپو 6 — `web3-pentest-toolkit`
**Description:** `Web3 penetration testing toolkit for smart contract security`

**README.md:**
```
# Web3 Pentest Toolkit

A curated toolkit for Web3 and smart contract penetration testing.

## Tools Covered

- **Slither** — Static analysis
- **Mythril** — Symbolic execution
- **Echidna** — Fuzzing
- **Foundry** — Testing framework
- **Hardhat** — Development environment

## Attack Checklists

- Reentrancy
- Access Control
- Integer Overflow
- Flash Loan
- Oracle Manipulation
- Front Running
- Signature Replay

## Structure

    checklists/
    ├── audit-checklist.md
    └── defi-checklist.md
    tools/
    ├── slither-config.json
    └── mythril-commands.md

## Contact

- LinkedIn: linkedin.com/in/ayatdev
- GitHub: github.com/AyatDev
```

**فایل دوم** — `checklists/audit-checklist.md`:
```
# Smart Contract Audit Checklist

## Access Control
- [ ] onlyOwner on sensitive functions
- [ ] Role-based access with OpenZeppelin
- [ ] No tx.origin for authorization

## Reentrancy
- [ ] CEI pattern followed
- [ ] ReentrancyGuard applied
- [ ] No state changes after external calls

## Arithmetic
- [ ] Solidity 0.8+ or SafeMath used
- [ ] Division by zero checks
- [ ] Overflow in unchecked blocks reviewed

## External Calls
- [ ] Return values checked
- [ ] Low-level calls handled properly
- [ ] Pull over push pattern

## Oracle
- [ ] TWAP used instead of spot price
- [ ] Multiple oracle sources
- [ ] Manipulation resistance checked
```

---

## ریپو 7 — `ctf-writeups`
**Description:** `CTF challenge writeups focused on blockchain and smart contract security`

**README.md:**
```
# CTF Writeups — Blockchain & Smart Contract Security

Detailed writeups of blockchain and smart contract CTF challenges.

## Platforms

- **Ethernaut** — OpenZeppelin CTF
- **Damn Vulnerable DeFi** — DeFi attack challenges
- **CaptureTheEther** — Ethereum security challenges

## Writeups

| Challenge | Platform | Category | Difficulty |
|-----------|----------|----------|------------|
| Reentrancy | Ethernaut | Reentrancy | Medium |
| Flash Loan | DVDF | DeFi | Hard |
| Token Overflow | CTE | Arithmetic | Easy |

## Structure

    ethernaut/
    dvdf/
    capture-the-ether/

## Contact

- LinkedIn: linkedin.com/in/ayatdev
- GitHub: github.com/AyatDev
```

---

## ریپو 8 — `reentrancy-demo`
**Description:** `Live demonstration of reentrancy attack and defense in Solidity`

**README.md:**
```
# Reentrancy Attack Demo

A complete demonstration of reentrancy attack and defense in Solidity.

## What's Inside

- Vulnerable contract
- Attacker contract
- Fixed contract
- Full test suite

## How It Works

1. Deploy VulnerableBank
2. Deploy Attacker with VulnerableBank address
3. Call attack() — drains the contract
4. Deploy SecureBank — attack fails

## Run

    npm install
    npx hardhat test

## Contact

- LinkedIn: linkedin.com/in/ayatdev
- GitHub: github.com/AyatDev
