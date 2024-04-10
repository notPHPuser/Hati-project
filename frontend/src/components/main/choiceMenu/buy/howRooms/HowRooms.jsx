import React from 'react';
import './howrooms.css';

function HowRooms() {
  return (
    <>
      <div className='rooms'>
        <button id='count-rooms' className='count-rooms'>
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
