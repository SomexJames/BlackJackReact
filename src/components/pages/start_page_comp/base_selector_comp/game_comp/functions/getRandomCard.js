

export function getRandomCard(deck) {
    var updatedDeck = deck;
    var ind = Math.floor(Math.random() * updatedDeck.length);
    console.log(ind);
    const randomCard = updatedDeck[ind];
    updatedDeck.splice(ind, 1);
    console.log("getRandomCard() just ran");
    return { randomCard, updatedDeck }
}