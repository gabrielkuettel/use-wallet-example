import React from "react";
import {
  useWallet,
  NODE_TOKEN,
  NODE_SERVER,
  NODE_PORT,
} from "@txnlab/use-wallet";
import algosdk from "algosdk";

const algodClient = new algosdk.Algodv2(NODE_TOKEN, NODE_SERVER, NODE_PORT);

export default function Wallet() {
  const { activeAccount, accounts, signTransactions, sendTransactions } =
    useWallet();

  // Use these properties to display connected accounts to users.
  React.useEffect(() => {
    console.log("connected accounts", accounts);
    console.log("active account", activeAccount);
  });

  const sendTransaction = async (
    from?: string,
    to?: string,
    amount?: number
  ) => {
    if (!from || !to || !amount) {
      throw new Error("Missing transaction params.");
    }

    const params = await algodClient.getTransactionParams().do();

    const transaction = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
      from,
      to,
      amount,
      suggestedParams: params,
    });

    const encodedTransaction = algosdk.encodeUnsignedTransaction(transaction);
    const signedTransactions = await signTransactions([encodedTransaction]);

    const { id } = await sendTransactions(signedTransactions);

    console.log("Successfully sent transaction. Transaction ID: ", id);
  };

  if (!activeAccount) {
    return <p>Connect an account first.</p>;
  }

  return (
    <div>
      {
        <button
          onClick={() =>
            sendTransaction(
              activeAccount?.address,
              activeAccount?.address,
              1000
            )
          }
          className="button"
        >
          Sign and send transactions
        </button>
      }
    </div>
  );
}
