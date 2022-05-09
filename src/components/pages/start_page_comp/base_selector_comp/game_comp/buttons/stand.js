import { useContext } from "react";
import { GlobalState } from "../../../../../global_states/global_state";
import { getCount } from "../functions/getCount";
import { getWinner } from "../functions/getWinner";


export function Stand() {
    const { currentGameInfo, setGameInfo } = useContext(GlobalState);
    const gameOver = currentGameInfo.gameOver;
    const currentBet = currentGameInfo.currentBet;
    var deck = currentGameInfo.deck;
    var player = currentGameInfo.player;
    var dealer = currentGameInfo.dealer;
    var balance = currentGameInfo.balance;
    var message = currentGameInfo.message;

    function getRandomCard() {
        var updatedDeck = deck;
        var ind = Math.floor(Math.random() * updatedDeck.length);
        const randomCard = updatedDeck[ind];
        updatedDeck.splice(ind, 1);
        
        setGameInfo(prev => {
            return {
                ...prev,
                deck: updatedDeck
            }
        })
        return  (randomCard)
    }

    function dealerDraw() {
        const randomCard  = getRandomCard();
        const cards = dealer.cards.concat(randomCard);
        const count = Number(getCount(cards));
        return {cards, count}
    }

    function stand() {
        if (!gameOver) {

    // Keep drawing cards until count is 17 or more
        while (dealer.count <= player.count || dealer.count < 12) {
            const {cards, count} = dealerDraw();
            dealer = {cards, count};
            setGameInfo(prev => {
                return{
                    ...prev,
                    dealer
                }
            })
        }

        if (dealer.count > 21 ) {
            setGameInfo(prev => {
                return {
                    ...prev,
                    deck,
                    dealer,
                    balance: Number(balance) + Number(currentBet),
                    gameOver: true,
                    message: 'Dealer bust! You win!'
                }
            });
            
        } else {
            const winner = getWinner(dealer, player);

            if (winner === 'dealer') {
                balance = Number(balance) - Number(currentBet);
                message = 'Dealer wins...';
            } else if (winner === 'player') {
                balance = Number(balance) + Number(currentBet);
                message = 'You win!';
            } else {
                message = 'Push.';
            }

            setGameInfo(prev => {
                return {
                    ...prev,
                    deck,
                    dealer,
                    balance,
                    gameOver: true,
                    message
                }
            })

        }
        } else {
            setGameInfo(prev => {
                return {
                    ...prev,
                    message: 'Game over! Please start a new game.'
                }
            })
        }
    }
    return (
        <button onClick={() => stand()}>Stand</button>
    )
}