import { observer } from 'mobx-react-lite';
import './ApartmentsTwo.css';
import React, { useContext } from 'react';
import { Context } from '../..';
import ApartmentsItem from './ApartmentsItem';

const ApartmentsList = observer(() => {
  const { apartment } = useContext(Context);
  return (
    <>
      <ul className='listAp'>
        {apartment.apartment.map((apartment) => (
          <ApartmentsItem key={apartment.id} apartment={apartment} />
        ))}
      </ul>
    </>
  );
});

export default ApartmentsList;
