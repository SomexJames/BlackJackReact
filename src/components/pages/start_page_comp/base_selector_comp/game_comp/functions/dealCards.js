import { getRandomCard } from "./getRandomCard";
import { getCount } from "./getCount";


export function dealCards(deck) {

  const playerCard1 = getRandomCard(deck);
  const dealerCard1 = getRandomCard(playerCard1.updatedDeck);
  const playerCard2 = getRandomCard(dealerCard1.updatedDeck);
  const playerStartingHand = [playerCard1.randomCard, playerCard2.randomCard];
  const dealerStartingHand = [dealerCard1.randomCard, {}];



  const pCount = getCount(playerStartingHand);

  const dCount = getCount(dealerStartingHand);

  const updatedDeck = playerCard2.updatedDeck;

  return [updatedDeck, playerStartingHand, pCount, dealerStartingHand, dCount];
}