import { Hit } from "./hit";
import { Stand } from "./stand";
import { useContext } from "react";
import { GlobalState } from "../../../../../global_states/global_state";
import { dealCards } from "../functions/dealCards";
import { generateDeck } from "../functions/generateDeck";

export function Buttons(){
    const { currentUserInfo, setCurrentUserInfo, currentGameInfo, setGameInfo, accReqPending, setAccReqPending} = useContext(GlobalState);
    var currentBet = currentGameInfo.currentBet;
    var deck = currentGameInfo.deck;
    function startNewGame() {
        console.log("startNewGame() just ran");
        deck = deck.length < 10 ? generateDeck() : deck;
        dealCards(deck);

        setGameInfo(prev => { 
            return {
                ...prev,
                gameOver: false,
                message: null,
                currentBet: null
            }
        });
    }

    if (currentGameInfo.gameOver) {
        return(
            <div className="buttons">
                <button onClick={() => startNewGame()}>Start New Game</button>
            </div>
        )
    } else {
        return(
            <div className="buttons">
                <Hit />
                <Stand />
            </div>
        )
    }
    
}