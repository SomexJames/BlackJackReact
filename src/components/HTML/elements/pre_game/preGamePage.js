import { Header } from "../../../header"
import { NewGame } from "../buttons/startNewGame"
import { Hit } from "../buttons/hit"
import { Stand } from "../buttons/stand"
import { useEffect } from "react"
import { PreBetMessage } from "./preBetMsg"
import { PlaceBet } from "../buttons/placeBet"
import { useContext } from "react"
import { GlobalState } from "../../../global_states/global_state"
import { Body } from "../../body"
import { GetMyBalance } from "./currentBalance"
import { Buy } from "../purchase/buy"


export function PreGamePage() {
    const { currentUserInfo, setCurrentUserInfo, currentGameInfo, setGameInfo, accReqPending, setAccReqPending} = useContext(GlobalState);
    const currentBet = currentGameInfo.currentBet;
    useEffect(() => {
        // setCurrentUserInfo(prev => {
        //     return {
        //         ...prev,
        //         currentBet
        //     }
        // })
    },[currentGameInfo.currentBet])

    useEffect(() => {
        // setCurrentUserInfo(prev => {
        //     return {
        //         ...prev,
        //         message
        //     }
        // })
    },[currentGameInfo.message])

    if (currentBet !== null) {
        return (
            <>
                <Header />
                <Body />
            </>
        )
    } else {
        return (
        <>
            <Header />
            <PreBetMessage />
            <PlaceBet />
            <GetMyBalance />
            <Buy />
        </>
        )
    }
}
