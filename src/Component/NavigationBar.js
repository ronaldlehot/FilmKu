import {Navbar, Container, Nav} from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <div>
        <Navbar variant='dark'>
            <Container>
                <Navbar.Brand href="#home">Home</Navbar.Brand>
                <Nav >
                    <Nav.Link href="#trending">Tranding</Nav.Link>
                    <Nav.Link href="#superherog">SuperHero</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    );
    }

    export default NavigationBar;