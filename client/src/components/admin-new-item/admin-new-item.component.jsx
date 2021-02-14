import React, { useRef, useState } from 'react';

import { addImagesToStorage, addItemToCollection } from '../../firebase/firebase.utils';

import CustomButton from '../custom-button/custom-button.component';

import { AdminNewItemCont, NewItemForm, AddNewItemHeader, FormInputCont } from './admin-new-item.styles';

const AdminNewItem = () => {
  const [newItem, setNewItem] = useState({
    id: '',
    name: '', 
    latinName: '', 
    height: '',
    potsize: '',
    price: '',
    stock: '',
    images: []
  });
  const [imageAsFiles, setImageAsFiles] = useState();

  const imagesRef = useRef();
  
  console.log('imageRef', imagesRef)
  console.log('newItem: ', newItem);
  console.log('imageasfile', imageAsFiles)


  const {id, name, latinName, height, potsize, price, stock, images} = newItem;

  let newItemWithImageNames;

  const handleChange = event => { 
    const {name, value} = event.target;
    setNewItem({...newItem, [name]: value})
  }

  const handleImageAsFile = (e) => {
    const imageFiles = e.target.files;      
    setImageAsFiles({imageFiles})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('start of upload');

    if (!id || !name || !latinName || !height || !potsize || !price || !stock || !images) {
      console.error('One of the fields is incomplete');
      return;
    }

    const files = Object.values(imageAsFiles.imageFiles);   
    console.log('files', files);
    console.log('imageAsFueks', imageAsFiles);
    
    let finalNewItem = newItem;
    console.log('1', finalNewItem);
    for (let i = 0; i < files.length;i++) {
      finalNewItem = {...finalNewItem, images: newItem.images.push(files[i].name)};
      console.log('2', finalNewItem);
    }
    
    newItem.id = Number(newItem.id);
    newItem.stock = Number(newItem.stock);
    newItem.height = Number(newItem.height);
    newItem.potsize = Number(newItem.potsize);
    newItem.price = Number(newItem.price);

    console.log(newItem);
    console.log('3', finalNewItem);
    
    addItemToCollection(newItem);
    addImagesToStorage(imageAsFiles);
  }

  return ( 
    <AdminNewItemCont>
      <AddNewItemHeader>Add New Item</AddNewItemHeader>
      <NewItemForm onSubmit={handleSubmit}>
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
          name='potsize' 
          handleChange={handleChange}
          value={potsize}
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
          <input required type='file' name='images' ref={imagesRef} onChange={handleImageAsFile}  multiple/>
        </div>
        <CustomButton type='submit'>Add item to shop</CustomButton>
      </NewItemForm>
    </AdminNewItemCont>
  );
}
 
export default AdminNewItem;