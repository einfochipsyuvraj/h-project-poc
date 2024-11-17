import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className='bg-light text-dark py-4 mt-auto'>
      <Container>
        <Row>
          <Col className='text-center mt-3'>
            <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
