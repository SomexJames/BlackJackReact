import { useContext } from "react"
import { GlobalState } from "./global_states/global_state";
import { ethers } from "ethers";
import { StartPage } from "./StartPage";


export const handleEthAccReq = async () => {
    const currProvider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const _ethReqP = await currProvider.send("eth_requestAccounts", []).catch(e => 
        e.code === -32002 ? 
            false :
            console.log(e)
    );
    
    return _ethReqP
}