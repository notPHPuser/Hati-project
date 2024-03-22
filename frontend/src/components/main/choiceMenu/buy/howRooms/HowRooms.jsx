import React from 'react';
import './howrooms.css';

function HowRooms() {
  function changeRoomsColor() {
    document.getElementById('count-rooms').classList.add('change-rooms-color ');
  }

  return (
    <>
      <div className='rooms'>
        <button onClick={changeRoomsColor} id='count-rooms' className='count-rooms'>
          1
        </button>
        <button id='count-rooms' className='count-rooms'>
          2
        </button>
        <button id='count-rooms' className='count-rooms'>
          3
        </button>
        <button id='count-rooms' className='count-rooms'>
          4
        </button>
      </div>
    </>
  );
}

export default HowRooms;
