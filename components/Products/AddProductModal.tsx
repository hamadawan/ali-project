import * as React from 'react';
import Modal from '../Modal';
import AddProductForm from './AddProductForm';

type AddProductModalProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
const AddProductModal: React.FC<AddProductModalProps> = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} title="Add Product" onClose={() => setIsOpen(!isOpen)}>
      <AddProductForm />
    </Modal>
  )
}

export default AddProductModal;
