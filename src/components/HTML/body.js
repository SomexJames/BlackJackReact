import { Hit } from "./elements/buttons/hit"
import { Stand } from "./elements/buttons/stand"
import { NewGame } from "./elements/buttons/startNewGame"
import { Cards } from "./elements/cardDisplay"
import { Buttons } from "./elements/buttons/gameButtons"
import { useContext } from "react"
import { GlobalState } from "../global_states/global_state"

export function Body() {
    const { currentUserInfo, setCurrentUserInfo, currentGameInfo, setGameInfo, accReqPending, setAccReqPending} = useContext(GlobalState);
    console.log("body just ran");
    return (
        <div className="rt-container" id="main">
            <Cards />
            <Buttons />
        </div>
    )
}