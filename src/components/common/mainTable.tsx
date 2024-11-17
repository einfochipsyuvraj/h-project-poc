import React from 'react';
import { Table, Button, Container, Row } from 'react-bootstrap';
import { BsPencil, BsTrash } from 'react-icons/bs';

interface DataItem {
  id: number;
  name: string;
  value: string;
}

interface MainTableProps {
  data: DataItem[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const MainTable: React.FC<MainTableProps> = ({ data, onEdit, onDelete }) => {
  return (
    <main className='py-4'>
      <Container>
        <h5>All Record</h5>
        <Row>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Cab Name</th>
                <th>Value</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.value}</td>
                  <td>
                    <Button
                      variant='outline-primary'
                      className='btn-sm me-2'
                      onClick={() => onEdit(item.id)}
                    >
                      <BsPencil />
                    </Button>
                    <Button
                      variant='outline-danger'
                      className='btn-sm'
                      onClick={() => onDelete(item.id)}
                    >
                      <BsTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    </main>
  );
};

export default MainTable;
