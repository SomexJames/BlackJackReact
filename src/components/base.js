import { GlobalState } from "./global_states/global_state"
import { useContext } from "react";
import { handleEthAccReq } from "./handleEthAccReq";
import { useState } from "react";




export function Base() {
    const { currentUserInfo, setCurrentUserInfo } = useContext(GlobalState);
    const [ accReqPending, setAccReqPending] = useState(false);;

    const updateUser = async () => {
        const _accReqPending = sessionStorage.getItem(accReqPending);
        const _ethReqP = await handleEthAccReq();
        console.log(_ethReqP);
        console.log(_accReqPending);
        if (_accReqPending == "false") {
            if (_ethReqP) {
                console.log("not the start and is pending");
                setAccReqPending(() => {
                    sessionStorage.setItem(accReqPending, true)});
            } else {
                console.log("not the start and is not pending");
                // signer stuff
                setAccReqPending(() => {
                    sessionStorage.setItem(accReqPending, false);
                });
            }
        } else {
            setAccReqPending(() => {
                sessionStorage.setItem(accReqPending, _accReqPending)});
        };
    }
        // const currProvider = new ethers.providers.Web3Provider(window.ethereum, "any");
        // await currProvider.send("eth_requestAccounts", []).catch(e => {
        //     if (e.code === -32002) {
        //         return (<StartPage />);
        //     } else console.log("false")});
        //     console.log('before');
        // const signer = currProvider.getSigner();
        // console.log("after");
        // console.log(signer);
        // const signerAddress = await signer.getAddress().catch(e => console.log(e));

        // setCurrentUserInfo({
        //     provider: currProvider,
        //     signer: signer,
        //     signerAddress: signerAddress,
        //     balance: "-"
        // });
        return (
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
        )
}