import { useContext } from "react";
import { StartPage } from "../StartPage";
import { GlobalState } from "../global_states/global_state";
import { ethers } from "ethers";
import { GamePage } from "./game_page";
import { Header } from "../header";

export function Pages() {
    const { currentUserInfo, setCurrentUserInfo } = useContext(GlobalState);
    const currProvider = new ethers.providers.Web3Provider(window.ethereum, "any");
    currProvider.send("eth_requestAccounts", []).catch(e => {
        if (e.code === -32002) {
            return (<Header />);
        } else return (<StartPage />)
    });

}