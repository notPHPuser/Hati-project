import { observer } from 'mobx-react-lite';
import './ApartmentsTwo.css';
import React, { useContext, useEffect } from 'react';
import ApartmentsItem from './ApartmentsItem';
import { fetchApartament } from '../../http/apartamentAPI';

const ApartmentsList = observer(({ store }) => {
  //const { apartment } = useContext(Context);

  useEffect(() => {
    fetchApartament().then((data) => {
      if (data.rows) {
        store.setApartments(data.rows);
      } else {
        console.error('Received data is not an array:', data);
      }
    });
  }, []);

  if (!store || !store.apartments) return null;

  return (
    <>
      <ul style={{ cursor: 'pointer' }} className='listAp'>
        {store.apartments.map((apartment) => (
          <ApartmentsItem key={apartment.id} apartment={apartment} />
        ))}
      </ul>
    </>
  );
});

export default ApartmentsList;
