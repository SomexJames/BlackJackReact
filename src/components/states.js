import React from "react"
import { useState, useEffect, createContext } from "react";
import { useContext, useMemo } from "react";
import { GlobalState } from "./global_states/global_state";


export function GlobalStateDefault({ children })  {

  const [currentGameInfo, setGameInfo] = useState(() => {
    return {
            deck: [],
            dealer: null,
            player: null,
            balance: 100,
            inputValue: '',
            currentBet: null,
            gameOver: false,
            message: null
          }
        }
      );


  const globalStateValue = useMemo(() => ({ currentGameInfo, setGameInfo}));

  return (
    <GlobalState.Provider value={globalStateValue}>
      {children}
    </GlobalState.Provider>
    )

}