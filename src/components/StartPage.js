import { Header } from "./header"
import { Base } from "./base"
import { handleEthAccReq } from "./handleEthAccReq"
import { useContext, useState } from "react"
import { GlobalState } from "./global_states/global_state"
import { ethers } from "ethers"
import { useEffect } from "react"
import { GamePage } from "./site_stuff/game_page"
import erc20abi from "../ERC20abi.json"
import ErrorMessage from "../ErrorMessage"



export function StartPage() {
    const { currentUserInfo, setCurrentUserInfo, accReqPending, setAccReqPending } = useContext(GlobalState);
    const contractAddress = currentUserInfo.contractAddress;
    var provider = currentUserInfo.provider;
    var signer = currentUserInfo.signer;
    var signerAddress = currentUserInfo.signerAddress;
    var erc20 = currentUserInfo.erc20;
    useEffect(() => {
        console.log("useeffect");
        const sessStorage = JSON.parse(sessionStorage.getItem(accReqPending));
        setAccReqPending(() => {
            if (accReqPending !== null && sessStorage === null) {
                return accReqPending;
            } else if (accReqPending !== sessStorage && sessStorage !== null) {
                return sessStorage;
            } else return accReqPending
        })
    },[accReqPending]);

    const updateUser = async () => {
        try {
            if (!window.ethereum)
                throw new Error('No crypto wallet found. Please install "MetaMask" in the Chrome Extensions Store')
        } catch (err) {
            alert(err)
        }
        provider = new ethers.providers.Web3Provider(window.ethereum, "any");
        if (accReqPending === null) {
            setAccReqPending(true);
        }
        const _ethReqP = await handleEthAccReq();
        if (!_ethReqP) {
            console.log("ethreqp pending");
            sessionStorage.setItem(accReqPending, true);
            setAccReqPending(true);
        } else {
            erc20 = new ethers.Contract(contractAddress, erc20abi, provider);
            signer = provider.getSigner();
            signerAddress = await signer.getAddress().catch(e => console.log(e));
            console.log("ethreqp not pending");
            sessionStorage.setItem(accReqPending, false);
            setAccReqPending(false);
            setCurrentUserInfo(prev => {
                    return {
                        ...prev,
                        provider,
                        signer,
                        signerAddress,
                        erc20
                    }
                });
        }
    
    }

    if (accReqPending) {
        return (
            <>
                <Header />
                <div class="rt-container">
                    <div class="col-rt-12">
                        <div class="Scriptcontent">
                            <div class="pregame_background">
                                <div class="box">
                                    <h3>Trying to connect...</h3>
                                    <p>Please check your Web3 Chrome extension (i.e. "MetaMask")</p>
                                    <p>Once connected, click "Retry"</p>
                                    <button onClick={() => updateUser()}>Retry</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    } else if (currentUserInfo.signerAddress != "-"){
        return (<GamePage />)
    } else {
        return (
            <>
                <Header />
                <div class="rt-container">
                    <div class="col-rt-12">
                        <div class="Scriptcontent">
                            <div class="pregame_background">
                                <div class="box">
                                    <h3>Click "Connect" to connect to your Web3 Wallet!</h3>
                                    <button onClick={() => updateUser()}>Connect</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            )
    }
    
}