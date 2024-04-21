import React from 'react';
import Header from '../../components/header/Header';
import squere from '../../assets/squere.png';
import squere_living from '../../assets/squere_living.png';
import floor from '../../assets/floor.png';
import squere_kitchen from '../../assets/squere_kitchen.png';
import bathroom from '../../assets/bathroom.png';

function ApartmentsPage() {
  const apartment = {
    id: 1,
    name: 'pik',
    price: 120000008,
    img: 'https://my-dom.design/wp-content/uploads/2023/07/6.jpg',
  };
  const description = {
    id: 1,
    squere: 80,
    squere_living: '50',
    squere_kitchen: '20',
    floor: '2',
    bathroom: '2',
    description:
      'Круто вау ахуеть спасибо папаша за тукау красивую иномарку вау капец афигеть вау вау',
  };
  return (
    <>
      <div>
        <Header />
        <h1 style={{ position: 'absolute', zIndex: -1, left: 100, top: 70 }}>{apartment.name}</h1>
        <p style={{ position: 'absolute', fontSize: 25, left: 100, top: 120, zIndex: -1 }}>
          {apartment.price} ₽
        </p>
        <img
          style={{ zIndex: -1, position: 'absolute', height: 560, width: 700, left: 100, top: 200 }}
          src={apartment.img}
        ></img>
        <button
          style={{
            position: 'absolute',
            backgroundColor: 'inherit',
            fontSize: 20,
            display: 'flex',
            top: 780,
            left: 100,
            border: 1,
            borderStyle: 'solid',
            borderColor: 'blue',
            width: 200,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 7,
            cursor: 'pointer',
          }}
        >
          Понравилось
        </button>
      </div>
      <div
        style={{
          position: 'relative',
          top: 110,
          left: 830,
          // border: 1,
          // borderStyle: 'solid',
          // borderColor: 'red',
          width: 620,
          height: 560,
        }}
      >
        <img style={{ position: 'absolute', width: 43, zIndex: -1 }} src={squere}></img>
        <p
          style={{
            color: 'grey',
            fontSize: 15,
            position: 'absolute',
            top: -15,
            left: 45,
            zIndex: -1,
          }}
        >
          Общая площадь
        </p>
        <p style={{ position: 'absolute', fontSize: 18, zIndex: -1, top: -2, left: 45 }}>
          {description.squere} м<sup>2</sup>
        </p>
        <img
          style={{ position: 'absolute', width: 43, zIndex: -1, left: 220 }}
          src={squere_living}
        ></img>
        <p style={{ position: 'absolute', fontSize: 18, zIndex: -1, top: -2, left: 270 }}>
          {description.squere_living} м<sup>2</sup>
        </p>
        <p
          style={{
            color: 'grey',
            fontSize: 15,
            position: 'absolute',
            top: -15,
            left: 270,
            zIndex: -1,
          }}
        >
          Жилая площадь
        </p>
        <img style={{ position: 'absolute', width: 43, zIndex: -1, top: 80 }} src={floor}></img>
        <p
          style={{
            position: 'absolute',
            fontSize: 18,
            zIndex: -1,
            top: -2,
            left: 55,
            top: 80,
          }}
        >
          {description.floor}
        </p>
        <p
          style={{
            color: 'grey',
            fontSize: 15,
            position: 'absolute',
            top: -15,
            left: 55,
            top: 65,
            zIndex: -1,
          }}
        >
          Этаж
        </p>
        <img
          style={{ position: 'absolute', width: 43, zIndex: -1, left: 450 }}
          src={squere_kitchen}
        ></img>
        <p style={{ position: 'absolute', fontSize: 18, zIndex: -1, top: -2, left: 510 }}>
          {description.squere_kitchen} м<sup>2</sup>
        </p>
        <p
          style={{
            color: 'grey',
            fontSize: 15,
            position: 'absolute',
            top: -15,
            left: 510,
            zIndex: -1,
          }}
        >
          Площадь кухни
        </p>
        <img
          style={{ position: 'absolute', width: 43, zIndex: -1, top: 80, left: 220 }}
          src={bathroom}
        ></img>
        <p style={{ position: 'absolute', fontSize: 18, zIndex: -1, top: -2, left: 270, top: 80 }}>
          {description.bathroom}
        </p>
        <p
          style={{
            color: 'grey',
            fontSize: 15,
            position: 'absolute',
            top: 65,
            left: 270,
            zIndex: -1,
          }}
        >
          1 или 2
        </p>
        <p style={{ position: 'absolute', top: 150 }}>Описание:</p>
        <p style={{ position: 'absolute', top: 180 }}>{description.description}</p>
      </div>
    </>
  );
}

export default ApartmentsPage;
