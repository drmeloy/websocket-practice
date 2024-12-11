import { socket } from '../socket';
import './index.css';

export const PlayerBoard = () => {
  const handleClick = () => socket.emit('click', socket.id)

  return (
    <div className="player-board">
      <div className="reaction-square" onClick={handleClick}>

      </div>
    </div>
  )
}