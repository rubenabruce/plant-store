import React, { useState } from 'react';

import CustomButton from '../custom-button/custom-button.component';

import { AdminNewItemCont, NewItemForm, AddNewItemHeader, FormInputCont } from './admin-new-item.styles';

const AdminNewItem = () => {
  const [newItem, setNewItem] = useState({
    id: '',
    name: '', 
    latinName: '', 
    height: '',
    potSize: '',
    price: '',
    stock: '',
    images: ''
  })

  const {id, name, latinName, height, potSize, price, stock, images} = newItem;

  const handleChange = event => {
    const {name, value} = event.target;
    setNewItem({...newItem, [name]: value})
  }

  return ( 
    <AdminNewItemCont>
      <AddNewItemHeader>Add New Item</AddNewItemHeader>
      <NewItemForm>
        <FormInputCont 
          required
          label='Id' 
          type='text'
          name='id' 
          handleChange={handleChange}
          value={id} 
        />
        <FormInputCont 
          required 
          label='Name' 
          type='text' 
          name='name'
          handleChange={handleChange}
          value={name}
        />
        <FormInputCont 
          required 
          label='Latin Name' 
          type='text' 
          name='latinName' 
          handleChange={handleChange}
          value={latinName}
        />
        <FormInputCont 
          required 
          label='Height (cm)' 
          type='number' 
          name='height' 
          handleChange={handleChange}
          value={height}
        />
        <FormInputCont 
          required 
          label='Pot size (cm)' 
          type='number' 
          name='potSize' 
          handleChange={handleChange}
          value={potSize}
        />
        <FormInputCont 
          required 
          label='Price' 
          type='number' 
          name='price' 
          handleChange={handleChange}
          value={price}
        />
        <FormInputCont 
          required 
          label='Stock' 
          type='number' 
          name='stock' 
          handleChange={handleChange}
          value={stock}
        />
        <div>
          <span>Images: </span>
          <input required type='file' name='images' multiple/>
        </div>
      </NewItemForm>
      <CustomButton>Add item to shop</CustomButton>
    </AdminNewItemCont>
  );
}
 
export default AdminNewItem;