import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {registration} from "../http/UserApi";

const RegForm = () => {
    const signIn = async () => {
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
                    <Form.Control type="name" placeholder="Иванов" />
                    <Form.Label className="mt-2">Имя</Form.Label>
                    <Form.Control type="name" placeholder="Иван" />
                    <Form.Label className="mt-2">Номер телефона</Form.Label>
                    <Form.Control type="name" placeholder="+7-999-999-99-99" />
                    <Form.Label className="mt-2">E-mail</Form.Label>
                    <Form.Control type="email" placeholder="youremail@gmail.com" />
                    <Form.Label className="mt-2">Пароль</Form.Label>
                    <Form.Control type="password" placeholder="password" />
                    <Button
                        className="mt-4"
                        variant={"outline-primary"}
                        onClick={signIn}
                    >Зарегистрировать</Button>
                </Form>
            </Card>
        </Container>
    );
};

export default RegForm;
