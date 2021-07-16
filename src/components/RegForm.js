import React, {useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {registration} from "../http/UserApi";

const RegForm = () => {
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [phone, setPhone] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const signUn = async () => {
        const response = await registration()
        console.log(response)
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h3 className="m-auto">Регистрация нового агента</h3>
                <Form className="d-flex flex-column">
                    <Form.Label className="mt-2">Фамилия</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Иванов"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                    <Form.Label className="mt-2">Имя</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="Иван"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                    <Form.Label className="mt-2">Номер телефона</Form.Label>
                    <Form.Control
                        type="name"
                        placeholder="+7-999-999-99-99"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                    <Form.Label className="mt-2">E-mail</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="youremail@gmail.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Label className="mt-2">Пароль</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <Button
                        className="mt-4"
                        variant={"outline-primary"}
                        onClick={signUn}
                    >Зарегистрировать</Button>
                </Form>
            </Card>
        </Container>
    );
};

export default RegForm;
