// Import required libraries and initialize the Solana connection
import { Connection, Keypair, PublicKey, sendAndConfirmTransaction, Transaction } from '@solana/web3.js';
import { Token, TokenAmount } from '@solana/spl-token';

// Set the Solana connection and wallet
const SOLANA_CONNECTION = new Connection('https://api.devnet.solana.com', 'confirmed');
const FROM_KEYPAIR = Keypair.generate(); // Replace with your source wallet
const MINT_ADDRESS = new PublicKey('YOUR_MINT_ADDRESS'); // Replace with your mint address
const DESTINATION_WALLET = new PublicKey('DESTINATION_WALLET_ADDRESS'); // Replace with the destination wallet address
const TRANSFER_AMOUNT = 1; // Amount of tokens to transfer
const numberDecimals = 9; // Number of decimals for your token

// Create a new keypair for the destination account to pay the fees
const FEE_PAYER = Keypair.generate();

// Function to get or create an associated token account
async function getOrCreateAssociatedTokenAccount(
  connection: Connection,
  wallet: Keypair,
  mint: PublicKey,
  owner: PublicKey
): Promise<PublicKey> {
  const associatedTokenAddress = await Token.getAssociatedTokenAddress(
    mint,
    owner
  );

  let account = await connection.getAccountInfo(associatedTokenAddress);
  if (!account) {
    const createTx = new Transaction().add(
      Token.createAssociatedTokenAccountInstruction(
        mint,
        associatedTokenAddress,
        owner,
        wallet.publicKey,
        wallet.publicKey
      )
    );
    await sendAndConfirmTransaction(connection, createTx, [wallet]);
    account = await connection.getAccountInfo(associatedTokenAddress);
  }

  return associatedTokenAddress;
}

// Function to send tokens
async function sendTokens() {
  console.log(Sending ${TRANSFER_AMOUNT} ${MINT_ADDRESS} from ${FROM_KEYPAIR.publicKey.toString()} to ${DESTINATION_WALLET}.);

  // Step 1: Get or create source token account
  console.log(1 - Getting Source Token Account);
  let sourceAccount = await getOrCreateAssociatedTokenAccount(
    SOLANA_CONNECTION,
    FROM_KEYPAIR,
    MINT_ADDRESS,
    FROM_KEYPAIR.publicKey
  );
  console.log(    Source Account: ${sourceAccount.toString()});

  // Step 2: Get or create destination token account
  console.log(2 - Getting Destination Token Account);
  let destinationAccount = await getOrCreateAssociatedTokenAccount(
    SOLANA_CONNECTION,
    FEE_PAYER, // Modify this line
    MINT_ADDRESS,
    DESTINATION_WALLET
  );
  console.log(    Destination Account: ${destinationAccount.toString()});

  // Step 3: Create transaction
  const tx = new Transaction().add(
    Token.createTransferInstruction(
      MINT_ADDRESS,
      sourceAccount,
      destinationAccount,
      FEE_PAYER.publicKey, // Modify this line
      [],
      TRANSFER_AMOUNT * Math.pow(10, numberDecimals)
    )
  );

  // Step 4: Fetch recent blockhash and send transaction
  const latestBlockHash = await SOLANA_CONNECTION.getLatestBlockhash('confirmed');
  tx.recentBlockhash = await latestBlockHash.blockhash;
  const signature = await sendAndConfirmTransaction(SOLANA_CONNECTION, tx, [FROM_KEYPAIR, FEE_PAYER]); // Modify this line
  console.log(
    '\