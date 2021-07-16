import React, {useState} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import {createCar} from "../http/SaleApi";

const CarForm = () => {
    const [brand, setBrand] = useState()
    const [model, setModel] = useState()
    const [vin, setVin] = useState()
    const [gosNumber, setGosNumber] = useState()

    const addCar = async () => {
        const response = await createCar()
        console.log(response)
    }

    return (
        <Container>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Марка авто</Form.Label>
                    <Form.Control
                        placeholder="Kia"
                        value={brand}
                        onChange={e => setBrand(e.target.value)}
                    />
                    <Form.Label>Модель автомобиля</Form.Label>
                    <Form.Control
                        placeholder="Cee`d"
                        value={model}
                        onChange={e => setModel(e.target.value)}
                    />
                    <Form.Label>Vin</Form.Label>
                    <Form.Control
                        placeholder="0AAAA00AAAA000000"
                        value={vin}
                        onChange={e => setVin(e.target.value)}
                    />
                    <Form.Label>Гос номер</Form.Label>
                    <Form.Control
                        placeholder="AA000A716"
                        value={gosNumber}
                        onChange={e => setGosNumber(e.target.value)}

                    />
                </Form.Group>
                <Button onClick={addCar}>Сохранить</Button>
            </Form>
        </Container>
    );
};

export default CarForm;
