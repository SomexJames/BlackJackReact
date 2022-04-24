import { useContext } from "react";
import { GlobalState } from "../../../global_states/global_state";
import { getCount } from "../../../game/functions/getCount";
import { getRandomCard } from "../../../game/functions/getRandomCard";


export function Hit() {
    const { currentGameInfo, setGameInfo } = useContext(GlobalState);
    var gameOver = currentGameInfo.gameOver;
    var currentBet = currentGameInfo.currentBet;
    var player = currentGameInfo.player;
    var deck = currentGameInfo.deck;
    console.log("Hit just rendered");
    function hit() {
      console.log("hit() just ran");
        if (!gameOver) {
            if (currentBet !== null) { // change back to "currentBet"
              const { randomCard, updatedDeck } = getRandomCard(deck);
              player.cards.push(randomCard);
              player.count = getCount(player.cards);
      
              if (player.count > 21) {
                setGameInfo(prev => {return { ...prev, player, gameOver: true, message: 'BUST!'}});
              } else {
                setGameInfo(prev => {return { ...prev, deck: updatedDeck, player}});
              }
            } else {
                setGameInfo(prev => {return { ...prev, message: 'Place your bet.'}});
            }
          } else {
            setGameInfo(prev => {return { ...prev, message: 'Game over! Please start a new game.'}});
          }
    }

    return (
        <button onClick={() => hit()}>Hit</button>
    )
    
  }