import React from 'react';
import './WhereBuy.css';

function WhereBuy() {
  function OnClickForLive() {
    document.getElementById('forlive').classList.add('changeForLiveAndRent');
    document.getElementById('forrent').classList.remove('changeForLiveAndRent');
  }

  function OnClickForRent() {
    document.getElementById('forrent').classList.add('changeForLiveAndRent');
    document.getElementById('forlive').classList.remove('changeForLiveAndRent');
  }

  return (
    <>
      <div className='where'>
        <button onClick={OnClickForLive} id='forlive' className='ForLive'>
          Жилая
        </button>
        <button onClick={OnClickForRent} id='forrent' className='ForRent'>
          Коммерческая
        </button>
        <div className='line-one'></div>
      </div>
      <form action=''>
        <div className='choice-what-apart'>
          <label>
            <input type='checkbox' className='in-new' />
            <span className='what-in-new'>Квартиры в новостойке</span>
          </label>
          <label>
            <input type='checkbox' className='in-old' />
            <span className='what-in-old'>Квартиры во второчке</span>
          </label>
          <div className='line-two'></div>
        </div>
        <div className='what-room'>
          <label className='label-room'>
            <input type='checkbox' className='in-room' />
            <span className='what-in-room'>Комната</span>
            <div className='line-three'></div>
          </label>
        </div>
        <div className='choice-home-buy-house'>
          <label className='label-for-choice-buy'>
            <input type='checkbox' className='choice-input-buy' />
            <span className='what-choice-buy-house'>Дом, дача</span>
          </label>
        </div>
        <div className='choice-home-buy-part-house'>
          <label className='label-part'>
            <input type='checkbox' className='choice-input-but-part' />
            <span className='what-choice-buy-part-house'>Часть дома</span>
          </label>
        </div>
      </form>
    </>
  );
}

export default WhereBuy;
