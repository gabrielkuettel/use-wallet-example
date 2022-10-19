import React from "react";
import { useConnectWallet } from "@txnlab/use-wallet";
import Wallet from "./components/Wallet";
import ConnectWallet from "./components/ConnectWallet";

function App() {
  const { reconnectProviders } = useConnectWallet();

  // Reconnect the session when the user returns to the dApp
  React.useEffect(() => {
    reconnectProviders();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <ConnectWallet />
      <hr />
      <Wallet />
    </div>
  );
}

export default App;
