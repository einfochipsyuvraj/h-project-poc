import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar bg='light' variant='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>POC Budget APP</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
