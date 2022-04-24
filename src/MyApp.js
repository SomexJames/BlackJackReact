import { StartPage } from "./components/StartPage";
import { GlobalStateDefault, GlobalStates } from "./components/states";


export default function MyApp() {

    return (
        <GlobalStateDefault>
            <StartPage />
        </GlobalStateDefault>
    )

}