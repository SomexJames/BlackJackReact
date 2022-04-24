import { useState, useEffect, useContext } from "react"
import { GlobalState } from "../../../global_states/global_state";
import { ethers } from "ethers";
import { send_token } from "./sendToken";


export function Buy() {
    const { currentUserInfo, setCurrentUserInfo, currentGameInfo, setGameInfo, accReqPending, setAccReqPending } = useContext(GlobalState);
    const [value, setValue] = useState({inputValue: ""});
    const provider = currentUserInfo.provider;
    const signer = currentUserInfo.signer;
    const signerAddress = currentUserInfo.signerAddress;
    const contractAddress = currentUserInfo.contractAddress;
    useEffect(() => {
        var value = value;
    },[value.inputValue])
    console.log("buy render")
    const updateValue = (e) => {
        setValue(prev => {
            return {
                ...prev,
                inputValue: e.target.value
            }
        })
    }

    

    const placeOrder = async (e) => {
        e.preventDefault();
        const buySize = value.inputValue;
        console.log(buySize);

        await signer.sendTransaction({
            to: "0x9d66d11b8B0A3Be2d76CCb6922dA41c5a32FE880",
            value: ethers.utils.parseEther(String(buySize/5000))
        })

        send_token(
            contractAddress,
            buySize,
            signerAddress
          )
        
          // set balance here

    }

    return (
        <>
            <p>0.1 ETH = 500 UBUX</p>
            <form onSubmit={placeOrder}>
                <input type="text" placeholder="enter here to buy" value={value.inputValue} onChange={updateValue}/>
                <button onClick={placeOrder}>Buy</button>
            </form>
            <p>Estimated total: {value.inputValue/5000} ETH</p>
        </>
    )
}