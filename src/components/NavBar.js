import React, {useContext} from 'react';
import {Context} from "../index";
import {Navbar, Nav, Button} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import { START_ROUTE} from "../utils/Consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <div>
            <Navbar bg="light" variant="light">
                <NavLink style={{color: 'black'}} to={START_ROUTE}>Единый реестр страховых карт</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button>Админ панель</Button>
                        <Button className='ml-2'>Регистрация нового агента</Button>
                        <Button className='ml-2' onClick={() => user.setIsAuth(false)}>Выход</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button>Стартовая страница</Button>
                        <Button className='ml-2' onClick={() => user.setIsAuth(true)}>Вход</Button>
                    </Nav>
                }
            </Navbar>
        </div>
    );
});

export default NavBar;
