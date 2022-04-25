import { useEffect } from "react"
import { PreBetMessage } from "./pre_game_comp/preBetMsg"
import { PlaceBet } from "./pre_game_comp/placeBet"
import { useContext } from "react"
import { GlobalState } from "../../../global_states/global_state"
import { GetMyBalance } from "./pre_game_comp/currentBalance"


export function PreGamePage() {
    const { currentGameInfo, setGameInfo } = useContext(GlobalState);
    const currentBet = currentGameInfo.currentBet;

        return (
        <>
            <PreBetMessage />
            <PlaceBet />
            <GetMyBalance />
        </>
        )
}
