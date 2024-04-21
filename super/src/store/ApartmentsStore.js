import { makeAutoObservable, autorun, action, makeObservable, observable } from 'mobx';

export default class ApartmentsStore {
  types = [
    { id: 1, name: 'Квартира' },
    { id: 2, name: 'Дом' },
  ];

  selectedType = {};
  apartments = [];

  constructor() {
    makeObservable(this, {
      types: observable,
      selectedType: observable,
      apartments: observable,
      setApartments: action,
    });

    autorun(() => console.log('apartments updated', this.apartments));
  }

  setTypes(types) {
    this.types = types;
  }

  setApartments(apartments) {
    this.apartments = apartments;
  }

  setSelectedType(type) {
    this.selectedType = type;
  }
}

export const observableApartmentsStore = new ApartmentsStore();
