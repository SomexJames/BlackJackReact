import { getRandomCard } from "./getRandomCard";
import { getCount } from "./getCount";

export function dealerDraw(dealer, deck) {
    dealer = dealer;
    deck = deck;
    const { randomCard, updatedDeck } = getRandomCard(deck);
    newDealer.cards.push(randomCard);
    newDealer.count = getCount(newDealer.cards);
    return { newDealer, updatedDeck };
}