import { Col, Container, Row } from 'react-bootstrap';
import DisplayBalance from './DisplayBalance';

const DisplayBalances = ({ totalIncome }: { totalIncome: number }) => {
  return (
    <Container>
      <Row className='justify-content-center'>
        <Col md={6}>
          <DisplayBalance
            title='Income'
            value={totalIncome ? totalIncome.toString() : '1000'}
            color='success'
          />
        </Col>
        <Col md={6}>
          <DisplayBalance title='Expenses' value='700' color='danger' />
        </Col>
      </Row>
    </Container>
  );
};

export default DisplayBalances;
