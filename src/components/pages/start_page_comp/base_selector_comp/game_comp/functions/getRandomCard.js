

export function getRandomCard(deck) {
    var updatedDeck = deck;
    var ind = Math.floor(Math.random() * updatedDeck.length);
    const randomCard = updatedDeck[ind];
    updatedDeck.splice(ind, 1);
    return { randomCard, updatedDeck }
}