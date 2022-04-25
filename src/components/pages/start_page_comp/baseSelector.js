import { GlobalState } from "../../global_states/global_state"
import { useContext, useEffect } from "react";
import { PreGamePage } from "./base_selector_comp/PreGame";
import { Game } from "./base_selector_comp/Game";
import { useState } from "react";





export function BaseSelector() {
    const { currentGameInfo, setGameInfo } = useContext(GlobalState);
    const currentBet = currentGameInfo.currentBet;
    useEffect(() => {

    },[currentGameInfo.currentBet]);

    if (currentBet !== null) {
        return (
            <div className="rt-container" id="main">
                <Game />
            </div>
        )
    } else {
        return (
            <PreGamePage />
        )
    }
}