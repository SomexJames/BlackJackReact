import { Header } from "../header"
import { Base } from "../base"
import { NewGame } from "../HTML/elements/buttons/startNewGame"
import { Hit } from "../HTML/elements/buttons/hit"
import { Stand } from "../HTML/elements/buttons/stand"
import { useEffect } from "react"
import { useContext } from "react"
import { GlobalState } from "../global_states/global_state"
import { ethers } from "ethers"
import { PreGamePage } from "../HTML/elements/pre_game/preGamePage"

const addressCheck = async (currentUserInfo, setCurrentUserInfo) => {
    const signer = currentUserInfo.signer;
    var signerAddress = currentUserInfo.signerAddress;
    const currSignerAddress = await signer.getAddress();
    if (signerAddress !== currSignerAddress && signerAddress !== "-"){
        signerAddress = currSignerAddress;
        setCurrentUserInfo(prev => {
            return {
                ...prev,
                signerAddress,
            }
        })
    }
}

export function GamePage() {
    console.log("game page just rendered");
    const {currentUserInfo, setCurrentUserInfo, accReqPending, setAccReqPending} = useContext(GlobalState);
    
    const signerAddress = currentUserInfo.signerAddress;

    useEffect(() => {
        addressCheck(currentUserInfo, setCurrentUserInfo);
    })


    return (
        <PreGamePage />
    )
}