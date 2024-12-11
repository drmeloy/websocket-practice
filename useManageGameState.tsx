import { useState } from "react"


export const useManageGameState = () => {
  const [gameState, setGameState] = useState<'unclicked' | 'clicked' | 'waiting'>('waiting');

  return {
    gameState,
    setGameState
  }
}