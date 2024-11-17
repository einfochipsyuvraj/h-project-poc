import { Modal } from 'react-bootstrap';
import FormFiled from '../layout/FormFiled';
import Buttons from '../common/Buttons';

interface EditModalProps {
  show: boolean;
  handleClose: () => void;
  name: string;
  value: string;
  setName: (name: string) => void;
  setValue: (value: string) => void;
  handleEdit: (name: string, value: number) => void;
}

const EditModal = ({
  show,
  handleClose,
  name,
  value,
  setName,
  setValue,
  handleEdit,
}: EditModalProps) => {
  const handleCancel = () => {
    setName('');
    setValue('');
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormFiled
          name={name}
          value={value}
          setName={setName}
          setValue={setValue}
        />
        <Buttons
          primaryLabel='Save'
          secondaryLabel='Cancel'
          onPrimaryClick={() => handleEdit(name, Number(value))}
          onSecondaryClick={handleCancel}
        />
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
