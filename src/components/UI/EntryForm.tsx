import { Form, Container } from 'react-bootstrap';
import FormFiled from '../layout/FormFiled';
import Buttons from '../common/Buttons';

const InputForm = ({
  name,
  value,
  setName,
  setValue,
  handleAdd,
}: {
  name: string;
  value: string;
  setName: (name: string) => void;
  setValue: (value: string) => void;
  handleAdd: (name: string, value: number) => void;
}) => {
  const handleCancel = () => {
    setName('');
    setValue('');
  };

  return (
    <Container>
      <Form>
        <FormFiled
          name={name}
          value={value}
          setName={setName}
          setValue={setValue}
        />
        <Buttons
          primaryLabel='Add'
          secondaryLabel='Cancel'
          onPrimaryClick={() => handleAdd(name, Number(value))}
          onSecondaryClick={handleCancel}
        />
      </Form>
    </Container>
  );
};

export default InputForm;
