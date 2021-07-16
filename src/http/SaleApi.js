import {$authHost, $host} from "./Index";

export const createCar = async (brand, model, vin, gos_number) => {
    const {data} = await $authHost.post('/api/car', brand, model, vin, gos_number)
    return data
}

export const fetchCar = async () => {
    const {data} = await $host.get('api/car')
    return data
}

export const createSale = async (expiration_date, price, first_name, last_name, name, phone, address, state) => {
    const {data} = await $authHost.post('/api/sale', expiration_date, price, first_name, last_name, name, phone, address, state)
    return data
}

export const fetchSale = async () => {
    const {data} = await $host.get('api/sale')
    return data
}
