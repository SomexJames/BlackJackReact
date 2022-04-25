

export function getCount(_cards) {
    var rearranged = [];
    var localCards = _cards;
    localCards.forEach(card => {
        card.number === 'A' ? rearranged.push(card) : rearranged.unshift(card);
    });

    return rearranged.reduce((total, card) => {
        if (card.number === 'J' || card.number === 'Q' || card.number === 'K') {
          return total + 10;
        } else if (card.number === 'A') {
          return total + 11 <= 21 ? total + 11 : total + 1;
        } else {
          return total + card.number;
        }
      }, 0);
}