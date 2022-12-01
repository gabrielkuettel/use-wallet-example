import React from "react";
import {
  reconnectProviders,
  initializeProviders,
  WalletProvider,
} from "@txnlab/use-wallet";
import Connect from "./components/Connect";

const walletProviders = initializeProviders();

function App() {
  // Reconnect the session when the user returns to the dApp
  React.useEffect(() => {
    reconnectProviders(walletProviders);
  }, []);

  return (
    <WalletProvider value={walletProviders}>
      <div style={{ padding: "20px" }}>
        <Connect />
      </div>
    </WalletProvider>
  );
}

export default App;
