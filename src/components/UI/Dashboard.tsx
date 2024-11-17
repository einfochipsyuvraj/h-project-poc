import { useEffect, useState } from 'react';
import MainTable from '../common/mainTable';
import DisplayBalances from './DisplayBalances';
import InputForm from './EntryForm';
import EditModal from '../layout/EditModal';

const Dashboard = () => {
  const data1 = [
    { id: 1, name: 'Item 1', value: '100' },
    { id: 2, name: 'Item 2', value: '200' },
    { id: 3, name: 'Item 3', value: '300' },
  ];

  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState(data1);
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [editId, setEditId] = useState<number | null>(null);
  const [totalIncome, setTotalIncome] = useState(0);
  useEffect(() => {
    resetEntry();
  }, [showModal]);
  useEffect(() => {
    const total = data.reduce((acc, entry) => acc + Number(entry.value), 0);
    setTotalIncome(total);
  }, [data]);
  const handleEdit = (id: number) => {
    const itemToEdit = data.find((item) => item.id === id);
    if (itemToEdit) {
      setName(itemToEdit.name);
      setValue(itemToEdit.value);
      setEditId(id);
      setShowModal(true);
    }
  };

  const handleDelete = (id: number) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    setData([...data, { id: data.length + 1, name, value }]);
  };
  const resetEntry = () => {
    setName('');
    setValue('');
  };
  const handleSaveEdit = (name: string, value: number) => {
    if (editId !== null) {
      setData(
        data.map((item) =>
          item.id === editId ? { ...item, name, value: value.toString() } : item
        )
      );
      setEditId(null);
    }
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setName('');
    setValue('');
    setEditId(null);
  };

  return (
    <>
      <DisplayBalances totalIncome={totalIncome} />
      <EditModal
        show={showModal}
        handleClose={handleCloseModal}
        name={name}
        value={value}
        setName={setName}
        setValue={setValue}
        handleEdit={handleSaveEdit}
      />
      <MainTable data={data} onEdit={handleEdit} onDelete={handleDelete} />
      <InputForm
        handleAdd={handleAdd}
        name={name}
        value={value}
        setName={setName}
        setValue={setValue}
      />
    </>
  );
};

export default Dashboard;
