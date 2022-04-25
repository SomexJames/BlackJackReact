import { useContext, useEffect } from "react";
import { GlobalState } from "../../../../global_states/global_state";


export function GetMyBalance() {
    const { currentGameInfo, setGameInfo } = useContext(GlobalState);
    const balance = currentGameInfo.balance;
    return (
        <h3>Your Current Balance is: {balance}</h3>
    )
}