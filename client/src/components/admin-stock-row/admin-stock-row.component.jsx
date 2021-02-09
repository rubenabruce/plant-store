import React, { useState } from 'react';
import { connect } from 'react-redux';

import { deleteItem, setUpdateDataItem } from '../../redux/admin/admin.actions';
import { selectUpdatedItemById } from '../../redux/admin/admin.selectors';

import { ReactComponent as Bin } from '../../assets/bin.svg';

import { StockRowCont } from './admin-stock-row.styles';

const StockRow = ({item, setUpdateDataItem, reduxItem, deleteItem}) => {
  const [updatedItem, setUpdatedItem] = useState(item);
  const [deletedItem, setDeletedItem] = useState(false);
  console.log('stock row updated item', updatedItem)
  const { id, name, latinName, potsize, height, price, stock, images } = updatedItem;

  //dispatching to redux after the re-render to prevent state and redux being out of sync
  if (deletedItem) {
    return null
  } else if (updatedItem !== reduxItem) {
    setUpdateDataItem(updatedItem)
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUpdatedItem({ ...item, [name]: value});
  }

  const handleDelete = e => {
    console.log('handle delte')
    setDeletedItem(!deletedItem);
    deleteItem(updatedItem)
    
  }
  
  return ( 
    <StockRowCont className={`${deletedItem ? 'deleted' : ''}`}>
      <td><input type='number' onChange={handleChange} name='id' value={id} /></td>
      <td><input onChange={handleChange} name='name' value={name} /></td>
      <td><input onChange={handleChange} name='latinName' value={latinName} /></td>
      <td><input min='0' type='number' onChange={handleChange} name='height' value={height} /></td>
      <td><input min='0' type='number' onChange={handleChange} name='potsize' value={potsize} /></td>
      <td><input min='0' type='number' onChange={handleChange} name='price' value={price} /></td>
      <td><input min='0' type='number' onChange={handleChange} name='stock' value={stock} /></td>
      <td><input onChange={handleChange} name='images' value={images} /></td>
      <td><Bin onClick={handleDelete}/></td>
    </StockRowCont>
  );
}

const mapStateToProps = (state, ownProps) => ({
  reduxItem: selectUpdatedItemById(ownProps.item.id)(state)
});

const mapDispatchToProps = dispatch => ({
  setUpdateDataItem: item => dispatch(setUpdateDataItem(item)),
  deleteItem: item => dispatch(deleteItem(item)) 
});

export default connect(mapStateToProps, mapDispatchToProps)(StockRow);