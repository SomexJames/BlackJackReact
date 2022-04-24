import { useContext } from "react"
import { GlobalState } from "../../../global_states/global_state";
import { dealCards } from "../../../game/functions/dealCards";
import { generateDeck } from "../../../game/functions/generateDeck";
import { getCount } from "../../../game/functions/getCount";

export function newGame() {
    const { currentGameInfo, setGameInfo } = useContext(GlobalState);
    var deck = currentGameInfo.deck;
    var player = currentGameInfo.player;
    var dealer = currentGameInfo.dealer;
    console.log("NewGame just rendered");

    function getRandomCard(__deck) {
        console.log("getRandomCard() just ran");
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

    function startNewGame() {
        console.log("startNewGame() just ran");
        deck = deck.length < 10 ? generateDeck() : deck;
        dealCards(deck);

        setGameInfo(prev => {return{...prev, gameOver: false, message: null}});
    }

    startNewGame();
}