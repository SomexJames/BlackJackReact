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
    var wallet = currentGameInfo.wallet;
    var message = currentGameInfo.message;

    function getRandomCard() {
        console.log("getRandomCard() just ran");
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
        console.log(dealer);
        const randomCard  = getRandomCard();
        const cards = dealer.cards.concat(randomCard);
        console.log(cards);
        const count = Number(getCount(cards));
        return {cards, count}
    }

    function stand() {
        console.log("stand() just ran");
        if (!gameOver) {
    // Show dealer's 2nd card
        // console.log(dealer.cards);
        // console.log(dealer.count);

    // Keep drawing cards until count is 17 or more
        while (dealer.count <= player.count || dealer.count < 12) {
            const {cards, count} = dealerDraw();
            console.log(cards);
            dealer = {cards, count};
            console.log(dealer)
            setGameInfo(prev => {
                return{
                    ...prev,
                    dealer
                }
            })
        }

        if (dealer.count > 21 ) {
            // Add transaction code here (based on "currentBet")
            setGameInfo(prev => {
                return {
                    ...prev,
                    deck,
                    dealer,
                    wallet, // Add later
                    gameOver: true,
                    message: 'Dealer bust! You win!'
                }
            });
            
        } else {
            const winner = getWinner(dealer, player);

            if (winner === 'dealer') {
            message = 'Dealer wins...';
            // Add transaction code here (based on "currentBet")
            } else if (winner === 'player') {
            message = 'You win!';
            // Add transaction code here (based on "currentBet")
            } else {
            message = 'Push.';
            }

            setGameInfo(prev => {
                return {
                    ...prev,
                    deck,
                    dealer,
                    wallet,
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