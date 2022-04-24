import { useContext } from "react/cjs/react.production.min"
import { GlobalState } from "../../global_states/global_state"

export function startNewGame() {
    const { currentUserInfo, setCurrentUserInfo } = useContext(GlobalState);
    
}