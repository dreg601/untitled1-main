import React, {useContext} from 'react';
import {Button, Container, Dropdown, Form} from "react-bootstrap";
import {Context} from "../index";

const SaleForm = () => {
    const {sale} = useContext(Context)

    return (
        <Container>
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Дата окончания действия карты</Form.Label>
                    <Form.Control type="date" placeholder="1 января 2000" />
                    <Form.Label>Фамилия</Form.Label>
                    <Form.Control type="name" placeholder="Жалнин" />
                    <Form.Label>Имя</Form.Label>
                    <Form.Control type="name" placeholder="Дмитрий" />
                    <Form.Label>Отчество</Form.Label>
                    <Form.Control type="name" placeholder="Сергеевич" />
                    <Form.Label>Номер телефона</Form.Label>
                    <Form.Control placeholder="+7-999-999-99-99" />
                    <Form.Label>Адрес проживания</Form.Label>
                    <Form.Control placeholder="г.Казань, ул.Пупы 10 кв 10" />
                    <Form.Label>Состояние карты</Form.Label>
                    <Form.Control as="select" defaultValue="Активирована">
                        <option>Активирована</option>
                        <option>Ожидание</option>
                        <option>Отказ</option>
                    </Form.Control>
                    <Dropdown className='mt-2'>
                        <Dropdown.Toggle>Выберите автомобиль</Dropdown.Toggle>
                        <Dropdown.Menu>{
                            sale.cars.map(cars =>
                            <Dropdown.Item key={cars.id_car}>{cars.vin}</Dropdown.Item>)
                        }</Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className='mt-2'>
                        <Dropdown.Toggle>Выберите страховщика</Dropdown.Toggle>
                        <Dropdown.Menu>{
                            sale.insurances.map(insurances =>
                                <Dropdown.Item key={insurances.id_insurance}>{insurances.name}</Dropdown.Item>)
                        }</Dropdown.Menu>
                    </Dropdown>
                </Form.Group>
                <Button onClick={() =>alert('Сохранено успешно')}>Сохранить</Button>
            </Form>
        </Container>
    );
};

export default SaleForm;
