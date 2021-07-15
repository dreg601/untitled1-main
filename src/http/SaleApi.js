import {$authHost, $host} from "./Index";

export const createCar = async (brand, model, vin, gos_number) => {
    const {data} = await $authHost.post('/api/cars', brand, model, vin, gos_number)
    return data
}

export const fetchCar = async () => {
    const {data} = await $host.get('api/cars')
    return data
}
