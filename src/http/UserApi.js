import {$host, $authHost} from "./Index";

export const registration = async (first_name, last_name, phone, email, password) => {
    const response = await $host.post('api/agent/registration', {first_name, last_name, phone, email, password})
    return response
}

export const login = async (email, password) => {
    const response = await $host.post('api/agent/login', {email, password})
    return response
}

export const check = async () =>{
    const  response = await  $host.post('api/agent/registration')
    return response
}
