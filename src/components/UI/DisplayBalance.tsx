import { Card } from 'react-bootstrap';
interface StatisticProps {
  title: string;
  value: string;
  size?: string;
  color?: string;
}
const DisplayBalance: React.FC<StatisticProps> = ({ title, value }) => {
  return (
    <div>
      <Card>
        <Card.Body className='text-center'>
          <Card.Title>{title}</Card.Title>
          <Card.Text className='display-4'>{value}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default DisplayBalance;
