import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setUpdateDataItem } from '../../redux/admin/admin.actions';
import { selectUpdatedItemById } from '../../redux/admin/admin.selectors';

const StockRow = ({item, setUpdateDataItem, reduxItem}) => {
  const [updatedItem, setUpdatedItem] = useState(item);
  console.log('stock row updated item', updatedItem)
  const { id, name, latinName, potsize, height, price, stock, images } = updatedItem;

  //dispatching to redux after the re-render to prevent state and redux being out of sync
  if (updatedItem !== reduxItem) {
    setUpdateDataItem(updatedItem)
  };


  const handleChange = event => {
    const { value, name } = event.target;
    setUpdatedItem({ ...item, [name]: value});
  }
  
  return ( 
    <tr>
      <td><input type='number' onChange={handleChange} name='id' value={id} /></td>
      <td><input onChange={handleChange} name='name' value={name} /></td>
      <td><input onChange={handleChange} name='latinName' value={latinName} /></td>
      <td><input type='number' onChange={handleChange} name='height' value={height} /></td>
      <td><input type='number' onChange={handleChange} name='potsize' value={potsize} /></td>
      <td><input type='number' onChange={handleChange} name='price' value={price} /></td>
      <td><input type='number' onChange={handleChange} name='stock' value={stock} /></td>
      <td><input onChange={handleChange} name='images' value={images} /></td>
    </tr>
  );
}


const mapStateToProps = (state, ownProps) => ({
  reduxItem: selectUpdatedItemById(ownProps.item.id)(state)
});

const mapDispatchToProps = dispatch => ({
  setUpdateDataItem: item => dispatch(setUpdateDataItem(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(StockRow);