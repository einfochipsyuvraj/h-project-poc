import { Col, Form, Row } from 'react-bootstrap';

const FormFiled = ({
  name,
  value,
  setName,
  setValue,
}: {
  name: string;
  value: string;
  setName: (name: string) => void;
  setValue: (value: string) => void;
}) => {
  return (
    <div>
      <Row className='mb-3'>
        <Col md={6}>
          <Form.Group controlId='formInput1'>
            <Form.Label>Cab Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter cab name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row className='mb-3'>
        <Col md={6}>
          <Form.Group controlId='formInput2'>
            <Form.Label>Value</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter cab value'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row className='mb-3'>
        <Form>
          <Form.Check type='switch' id='custom-switch' label='Is expence' />
        </Form>
      </Row>
    </div>
  );
};

export default FormFiled;
