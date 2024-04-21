import React, { useContext } from 'react';
import './listOfFlats.css';
// import { observe } from 'mobx-react-lite';
import { Context } from '../..';
import { action } from 'mobx';

const ListOfFlats = action(() => {
  const { apartment } = useContext(Context);

  return (
    <>
      <div className='listOfFlats'>
        <p className='p-maybegood'>Могут подойти</p>
        <div>
          {apartment.types.map((type) => (
            <li
              // aria-activedescendant={type.id === apartments.SelectedType.id}
              key={type.id}
              id='apart'
              active={type.id === apartment.SelectedType}
              className='apartments_map'
              onClick={() => {
                apartment.setSelectedType(type);
              }}
            >
              {type.name}
            </li>
          ))}
        </div>
      </div>
    </>
  );
});

export default ListOfFlats;
