import './app.css';
import React from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Discount from './components/discount/Discount';
import OftenFind from './components/oftenfind/OftenFind';
import ListOfFlats from './components/mayBeGood/listOfFlats';

const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Discount />
      <OftenFind />
      <ListOfFlats />
    </>
  );
};

export default App;
