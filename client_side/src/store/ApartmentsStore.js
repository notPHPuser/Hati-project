import { makeAutoObservable } from 'mobx';

export default class ApartmentsStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Квартира' },
      { id: 2, name: 'Дом' },
    ];
    this._apartments = [
      {
        id: 1,
        name: 'freshh',
        price: 12000000,
        img: 'https://remont-f.ru/upload/iblock/597/dizayn-interyera-kvartiry-v-sovremennom-stile-gostinaja-2.jpg',
      },
      {
        id: 2,
        name: 'freshhh',
        price: 120000008,
        img: 'https://my-dom.design/wp-content/uploads/2023/07/6.jpg',
      },
    ];
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setApartments(apartments) {
    this._apartments = apartments;
  }
  get types() {
    return this._types;
  }
  get apartments() {
    return this._apartments;
  }
}
