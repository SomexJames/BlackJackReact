import { useContext } from "react";
import { GlobalState } from "../../../../../global_states/global_state";
import { getCount } from "../functions/getCount";
import { getRandomCard } from "../functions/getRandomCard";


export function Hit() {
    const { currentGameInfo, setGameInfo } = useContext(GlobalState);
    var gameOver = currentGameInfo.gameOver;
    var currentBet = currentGameInfo.currentBet;
    var player = currentGameInfo.player;
    var deck = currentGameInfo.deck;
    var balance = currentGameInfo.balance;
    function hit() {
        if (!gameOver) {
            if (currentBet !== null) {
              const { randomCard, updatedDeck } = getRandomCard(deck);
              player.cards.push(randomCard);
              player.count = getCount(player.cards);
      
              if (player.count > 21) {
                setGameInfo(prev => {
                  return {
                    ...prev,
                    balance: Number(balance) - Number(currentBet),
                    player,
                    gameOver: true,
                    message: 'BUST!'
                  }
                });
              } else {
                setGameInfo(prev => {return { ...prev, deck: updatedDeck, player}});
              }
            }
          }
    }

    return (
        <button onClick={() => hit()}>Hit</button>
    )
    
  }