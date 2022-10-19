import React from "react";
import { useConnectWallet } from "@txnlab/use-wallet";

export default function ConnectWallet() {
  const { providers } = useConnectWallet();

  // Map through the providers, and render "connect", "set active", and "disconnect" buttons
  return (
    <div>
      {providers.map((provider) => (
        <div key={"provider-" + provider.id}>
          <h4>
            <img
              width={30}
              height={30}
              src={provider.icon}
              alt={provider.name}
            />
            {provider.name} {provider.isActive && "[active]"}
          </h4>
          <div>
            <button onClick={provider.connect} disabled={provider.isConnected}>
              Connect
            </button>
            <button
              onClick={provider.disconnect}
              disabled={!provider.isConnected}
            >
              Disonnect
            </button>
            <button
              onClick={provider.setActive}
              disabled={!provider.isConnected || provider.isActive}
            >
              Set Active
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
