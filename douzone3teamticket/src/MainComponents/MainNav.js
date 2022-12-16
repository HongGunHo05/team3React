import { Button, Container, Nav, Navbar, NavDropdown, Stack, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

import '../css/Main.css'
import SearchBar from "./SearchBar";

function MainNav() {

    let navigate = useNavigate();

    let state = useSelector((state) => {
        return state;
    });

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand onClick={() => { navigate('/'); }}>Douzone3team</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">
                            <Nav.Link onClick={() => { navigate('/concert'); }}>콘서트</Nav.Link>
                            <Nav.Link onClick={() => { navigate('/musical'); }}>뮤지컬</Nav.Link>
                            <Nav.Link onClick={() => { navigate('/theater'); }}>연극</Nav.Link>
                            <Nav.Link onClick={() => { navigate('/classic'); }}>클래식</Nav.Link>
                        </Nav>

                        <Stack direction="horizontal" gap={3}>
                            <SearchBar />
                            <div className="vr" />
                        </Stack>

                        <Nav>
                            <Nav.Link onClick={() => {
                                localStorage.getItem('userId') !== '' ? navigate('/mypage') : navigate('/user/login');
                            }}>
                                <img className={'userImg'} src={require('../image/login.png')} alt={'login'} title={'로그인'} />
                            </Nav.Link>
                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default MainNav;