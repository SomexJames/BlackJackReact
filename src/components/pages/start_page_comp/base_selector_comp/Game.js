import { Hit } from "./game_comp/buttons/hit"
import { Stand } from "./game_comp/buttons/stand"
import { NewGame } from "./game_comp/buttons/startNewGame"
import { Cards } from "./game_comp/cardDisplay"
import { Buttons } from "./game_comp/buttons/gameButtons"
import { useContext } from "react"
import { GlobalState } from "../../../global_states/global_state"


export function Game() {
    const {currentGameInfo, setGameInfo} = useContext(GlobalState);
    const message = currentGameInfo.message;
    return (
        <div className="rt-container" id="main">
            <p>{message}</p>
            <Cards />
            <Buttons />
        </div>
    )
}