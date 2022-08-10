import React, { useState, useEffect } from "react";
import { ethers } from "ethers";


const useAccount = () => {

    const [account, setAccount] = useState(null);


    const connect = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        // Prompt user for account connections
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        setAccount(await signer.getAddress())
    }

    const disconnect = () => {}

    useEffect(() => {
        (async () => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const accounts = await provider.listAccounts(); 
            if (accounts[0]) {
                setAccount(accounts[0]);
            }
        })();

        // const accountsChanged = () => {}

        // window.ethereum.on("accountsChanged", accountsChanged);

        // return () => {
            // window.ethereum.off("accountsChanged", accountsChanged);
        // }
    }, [])

    return {
        account,
        isConnected: account !== null,
        connect,
        disconnect,
    };
};

export default useAccount;