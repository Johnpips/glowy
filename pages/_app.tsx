import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import * as walletAdapterWallets from "@solana/wallet-adapter-wallets";
import * as web3 from "@solana/web3.js";
import { ChakraProvider } from "@chakra-ui/react";
require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");
require("../styles/Home.module.css");

const App = ({ Component, pageProps }) => {
  // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
  const endpoint = web3.clusterApiUrl("devnet");
  const wallets = [new walletAdapterWallets.PhantomWalletAdapter()];

  return (
    <ChakraProvider>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <Component {...pageProps} />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </ChakraProvider>
  );
};

export default App;
