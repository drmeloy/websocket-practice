import { useEffect, useState } from 'react'
import './App.css'
import { socket } from './socket';
import { PlayerBoard } from './components/PlayerBoard';

function App() {
  const [count, setCount] = useState(0)
  const [isConnected, setIsConnected] = useState(socket.connected);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
    };
  }, []);


  return (
    <>
      <PlayerBoard />
    </>
  )
}

export default App
