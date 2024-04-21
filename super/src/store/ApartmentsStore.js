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
        name: 'fresh',
        price: 12000000,
        img: 'https://icdn.lenta.ru/images/2020/03/10/20/20200310203521003/square_320_8772360448490615d4b5d316b61dbedb.jpg',
      },
      {
        id: 2,
        name: 'pik',
        price: 120000008,
        img: 'https://my-dom.design/wp-content/uploads/2023/07/6.jpg',
      },
      {
        id: 3,
        name: 'samolet',
        price: 120000543008,
        img: 'https://interiorcom.ru/netcat_files/5/4/dizayn_kvratiry_pod_sdachu.jpg',
      },
      {
        id: 4,
        name: 'cian',
        price: 120000543008,
        img: 'https://interiorcom.ru/netcat_files/5/4/dizayn_kvratiry_pod_sdachu.jpg',
      },
      // {
      //   id: 5,
      //   name: 'cianр',
      //   price: 120000543008,
      //   img: 'https://interiorcom.ru/netcat_files/5/4/dizayn_kvratiry_pod_sdachu.jpg',
      // },
    ];
    this._selectedType = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setApartments(apartments) {
    this._apartments = apartments;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }
  get types() {
    return this._types;
  }
  get apartments() {
    return this._apartments;
  }
  get selectedType() {
    return this._selectedType;
  }
}
