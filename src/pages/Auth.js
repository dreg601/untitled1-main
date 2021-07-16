import React, {useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {login} from "../http/UserApi";

const Auth = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const signIn = async () => {
        const response = await login()
        console.log(response)
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h3 className="m-auto">АВТОРИЗАЦИЯ</h3>
                <Form className="d-flex flex-column">
                    <Form.Label className="mt-2">Логин</Form.Label>
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
                        onClick={signIn}
                    >Авторизация</Button>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
