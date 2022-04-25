import { useContext } from "react"
import { useEffect } from "react";
import { GlobalState } from "../../../../global_states/global_state"
import { generateDeck } from "../game_comp/functions/generateDeck";
import { getCount } from "../game_comp/functions/getCount";


export function PlaceBet() {
    const { currentGameInfo, setGameInfo } = useContext(GlobalState);
    const inputValue = currentGameInfo.inputValue;
    const balance = currentGameInfo.balance;
    var deck = currentGameInfo.deck;
    var player = currentGameInfo.player;
    var dealer = currentGameInfo.dealer;
    var message = currentGameInfo.message;

    function getRandomCard(__deck) {
        var updatedDeck = __deck;
        var ind = Math.floor(Math.random() * updatedDeck.length);
        const randomCard  = updatedDeck[ind];
        updatedDeck.splice(ind, 1);
        
        setGameInfo(prev => {
            return {
                ...prev,
                deck: updatedDeck
            }
        })
        return  randomCard 
    }

    function dealCards(_deck) {

        const playerCard1 = getRandomCard(_deck);
        const dealerCard1 = getRandomCard(_deck);
        const playerCard2 = getRandomCard(_deck);
        const playerStartingHand = [playerCard1, playerCard2];
        const dealerStartingHand = [dealerCard1];
      
      
        player = {
          cards: playerStartingHand,
          count: getCount(playerStartingHand) };

      
        dealer = {
          cards: dealerStartingHand,
          count: getCount(dealerStartingHand) };

      
        setGameInfo(prev => {
            return {...prev, player, dealer}
        })
      
        
      }
    
    const updateBet = e => {
        setGameInfo(prev => {
            return {
                ...prev,
                inputValue: e.target.value
            }
        })
    }

    const placeBet = (e) => {
        e.preventDefault();
        const currentBet = currentGameInfo.inputValue;
        if (currentBet > balance) {
            setGameInfo(prev => {
                return {
                    ...prev,
                    message: "Insufficient funds"
                }
            })
        } else if (currentBet % 1 != 0) {
            setGameInfo(prev => {
                return {
                    ...prev,
                    message: "Only whole number bets allowed"
                }
            })
        } else {
            deck = deck.length < 10 ? generateDeck() : deck;
            dealCards(deck);
            setGameInfo(prev => {
                return {
                    ...prev,
                    currentBet: currentBet,
                    gameOver: false,
                    message: null,
                    inputValue: null
                }
            })
            
        }
    }
    return (
        <div className="input-bet">
            <form onSubmit={placeBet}>
                <input type="text" placeholder="enter here to bet" value={inputValue} onChange={updateBet}/>
                <button onClick={placeBet}>Place Bet</button>
            </form>
            <p>{message}</p>
        </div>
    )
}