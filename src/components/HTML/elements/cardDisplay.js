import { useContext, useEffect } from "react"
import { GlobalState } from "../../global_states/global_state"
import { Card, EmptyCard } from "./createCards";



export function Cards() {
    const { currentUserInfo, setCurrentUserInfo, currentGameInfo, setGameInfo, accReqPending, setAccReqPending} = useContext(GlobalState);
    const playerCards = currentGameInfo.player.cards;
    const dealerCards = currentGameInfo.dealer.cards;
    const playerCount = currentGameInfo.player.count;
    const dealerCount = currentGameInfo.dealer.count;

    // useEffect(() => {
    //     if (currentGameInfo.player !== undefined && currentGameInfo.dealer !== undefined) {

    //     }
    // })[currentGameInfo.player, currentGameInfo.dealer, currentGameInfo.deck]

    var pCardsArr = []
    var dCardsArr = [];

    for (let i = 0; i < playerCards.length; i++) {
        pCardsArr.push(Card(playerCards, i))
    }

    for (let j = 0; j < dealerCards.length; j++) {
        dCardsArr.push(Card(dealerCards, j))
        if (dealerCards.length == 1) {
            dCardsArr.push(EmptyCard())
        }
    }

    return (
        <>
            <p>Dealer's Hand: {dealerCount}</p>
            <table className="cards">
                <tr>
                    {dCardsArr}
                </tr>
            </table>
            <p>Your Hand: {playerCount}</p>
            <table className="cards">
                <tr>
                    {pCardsArr}
                </tr>
            </table>
        </>
    )
}