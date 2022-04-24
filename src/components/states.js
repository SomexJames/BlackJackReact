import React from "react"
import { useState, useEffect, createContext } from "react";
import { useContext, useMemo } from "react";
import { GlobalState } from "./global_states/global_state";
import { Pages } from "./site_stuff/pages";
import { ethers } from "ethers";


export function GlobalStateDefault({ children })  {

  const [ accReqPending, setAccReqPending ] = useState(
    null
  );

  const [currentUserInfo, setCurrentUserInfo] = useState(() => {
    return {
          provider: "-",
          signer: "-",
          signerAddress: "-",
          balance: "-",
          erc20: "-",
          contractAddress: "0x30be8054D3995233dA793D5907aA42543Ea5320B"
        }
    }
  );

  const [currentGameInfo, setGameInfo] = useState(() => {
    return {
            deck: [],
            dealer: null,
            player: null,
            inputValue: '',
            currentBet: null,
            gameOver: false,
            message: null
          }
        }
      );

    

  // useEffect(() => {
  //   const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  //   setCurrentUserInfo(prev => {return{...prev, provider}});
  // }), [currentUserInfo.provider];

  // useEffect(() => {
  //   const signer = currentUserInfo.provider.getSigner();
  //   const signerAddress = currentUserInfo.provider.getSigner().getAddress();
  //   setCurrentUserInfo(prev => {return{...prev, signer, signerAddress}});
  // }), [currentUserInfo.signer, currentUserInfo.signerAddress];

//   function Connect() {
//     const connectFunction = async () => {
//         const currProvider = new ethers.providers.Web3Provider(window.ethereum, "any");
//         await currProvider.send("eth_requestAccounts", []);
//         const signer = currProvider.getSigner();
//         const signerAddress = await signer.getAddress();

//         const updatedStates = {
//             provider: currProvider,
//             signer: signer,
//             signerAddress: signerAddress,
//             balance: "-"
//         }
    
//       setCurrentUserInfo(updatedStates);
//     }
//     connectFunction();
// }

  const globalStateValue = useMemo(() => ({ currentUserInfo, setCurrentUserInfo, currentGameInfo, setGameInfo, accReqPending, setAccReqPending}));
  // console.log(currentUserInfo)
  console.log(globalStateValue)

  return (
    <GlobalState.Provider value={globalStateValue}>
      {children}
    </GlobalState.Provider>
    )

}