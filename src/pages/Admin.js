import React from 'react';
import {Button, Container} from "react-bootstrap";

const Admin = () => {
    return (
        <Container>
            <Button variant={"outline-primary"}>Добавить страховую компанию</Button>
            <Button variant={"outline-primary"}>Добавить страховую карту</Button>
        </Container>
    );
};

export default Admin;
