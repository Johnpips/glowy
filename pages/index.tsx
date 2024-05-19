import { NextPage } from "next";
import styles from "../styles/Home.module.css";

import { SendSolForm } from "../components/SendSolForm";
import { Glow } from "../components/Glow";
import Head from "next/head";

const Home: NextPage = (props) => {
  return (
    <div className={styles.App}>
      <Head>
        <title>Wallet-Adapter Example</title>
        <meta name="description" content="Wallet-Adapter Example" />
      </Head>

      <Glow />
    </div>
  );
};

export default Home;
