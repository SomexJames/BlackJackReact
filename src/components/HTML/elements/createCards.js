

export function Card(cards, i) {

        return (
            <td>
                <div className="card">
                    {cards[i].number}{cards[i].suit}
                </div>
            </td>
        )

}

export function EmptyCard() {
    return (
        <td>
            <div className="card">
                
            </div>
        </td>
    )
}