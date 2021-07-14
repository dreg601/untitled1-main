import {makeAutoObservable} from "mobx";

export  default class SaleStore {
    constructor() {
        this._cards = [
            {id_card: 1, name: 'Универсальная страховая карта'}
        ]
        this._cars = [
            {id_car: 1, brand: 'Kia', model: 'Ceed', vin: '0AAAA00AAAЬ000000', gos_number: 'AA001A716'},
            {id_car: 2, brand: 'Kia', model: 'Picanto', vin: '0AAAA00AДAA000000', gos_number: 'AA002A716'},
            {id_car: 3, brand: 'Kia', model: 'Seltos', vin: '0AAAA00AИAA005740', gos_number: 'AA003A716'},
            {id_car: 4, brand: 'Kia', model: 'Soul', vin: '0AAAA00AAAA000510', gos_number: 'AA004A716'},
            {id_car: 5, brand: 'Kia', model: 'Sportage', vin: '0AAAA00AAAA002300', gos_number: 'AA005A716'},
        ]
        this._insurances = [
            {id_insurance: 1, name: 'Росгосстрах'},
            {id_insurance: 2, name: 'Альфа-страхование'},
            {id_insurance: 3, name: 'Талисман'},
        ]
        makeAutoObservable(this)
    }

    setCards(cards) {
        this._cards = cards
    }
    setCars(cars) {
        this._cars = cars
    }
    setInsurances(insurances) {
        this._insurances = insurances
    }

    get cards() {
        return this._cards
    }
    get cars() {
        return this._cars
    }
    get insurances() {
        return this._insurances
    }
}
