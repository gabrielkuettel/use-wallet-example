import React from "react";
import {
  reconnectProviders,
  initializeProviders,
  WalletProvider,
} from "@txnlab/use-wallet";
import Account from "./components/Account";
import Connect from "./components/Connect";
import Transact from "./components/Transact";

const walletProviders = initializeProviders();

function App() {
  // Reconnect the session when the user returns to the dApp
  React.useEffect(() => {
    reconnectProviders(walletProviders);
  }, []);

  return (
    <WalletProvider value={walletProviders}>
      <div style={{ padding: "20px" }}>
        <Account />
        <hr />
        <Connect />
        <hr />
        <Transact />
        <hr />
      </div>
    </WalletProvider>
  );
}

export default App;
