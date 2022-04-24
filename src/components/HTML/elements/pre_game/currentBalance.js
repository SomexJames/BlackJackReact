import { useContext, useEffect } from "react";
import { GlobalState } from "../../../global_states/global_state";
import { ethers } from "ethers";
import erc20abi from "../../../../ERC20abi.json"


export function GetMyBalance() {
    const { currentUserInfo, setCurrentUserInfo, currentGameInfo, setGameInfo, accReqPending, setAccReqPending} = useContext(GlobalState);
    var balance = currentUserInfo.balance;
    const signerAddress = currentUserInfo.signerAddress;
    const erc20 = currentUserInfo.erc20;
    const getMyBalance = async (balance) => {
        if (balance == "-") {
            balance = await erc20.balanceOf(signerAddress);
            setCurrentUserInfo(prev => {
                return {
                    ...prev,
                    balance: String(balance)
                }
            })
        }
    }
    useEffect(() => {
        console.log("getmybalance useeffect")
        getMyBalance(balance)
    },[currentUserInfo.balance])
    return (
        <h3>Your Current Balance is: {balance/1E18}</h3>
    )
}