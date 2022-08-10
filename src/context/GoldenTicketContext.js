import React, { ReactElement, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import { abi } from "../contracts/abi";

export const GoldenTicketContext = React.createContext(null);

export const GoldenTicketProvider = ({ children }) => {

    const [contract, setContract] = useState(null);

    useEffect(() => {
        (async () => {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const _contract = new ethers.Contract("0xd16Ba47434B532395B3Fe43B8ce126E1A2A9d972", abi, signer);
            console.log(_contract);
            setContract(_contract);
        })();
    }, []);


    const mintGoldenTicket = async () => {
        const tx = await contract?.mintGoldenTicket(1);
    }

    const currentSocialSupply = async () => {
        const res = await contract?.currentSupply().toPromise();
        return ethers.utils.formatEther(res);

    }
    
    const currentSupply  = async () => {
        const res = await contract?.currentSocialSupply();
        return ethers.utils.formatEther(res);
    };


    return <GoldenTicketContext.Provider value={{
        currentSocialSupply,
        mintGoldenTicket,
        currentSupply,
    }}>
        {children}
    </GoldenTicketContext.Provider>
}

export const useGoldenTicket = () => useContext(GoldenTicketContext);