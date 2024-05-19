import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import ConnectWallet from "../components/ConnectWallet";
import Head from "next/head";

const Claim: NextPage = (props) => {
  return (
    <div className={styles.App}>
      <ConnectWallet />
    </div>
  );
};

export default Claim;
