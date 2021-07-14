import React from 'react';
import {Button, Container, Form} from "react-bootstrap";

const CarForm = () => {
    return (
        <Container>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Марка авто</Form.Label>
                    <Form.Control placeholder="Kia" />
                    <Form.Label>Модель автомобиля</Form.Label>
                    <Form.Control placeholder="Cee`d" />
                    <Form.Label>Vin</Form.Label>
                    <Form.Control placeholder="0AAAA00AAAA000000" />
                    <Form.Label>Гос номер</Form.Label>
                    <Form.Control placeholder="AA000A716" />
                </Form.Group>
                <Button onClick={() => alert('Успешно сохранено')}>Сохранить</Button>
            </Form>
        </Container>
    );
};

export default CarForm;
