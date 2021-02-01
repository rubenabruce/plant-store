import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { addCollectionAndDocuments } from '../../firebase/firebase.utils';

import { setOriginalData, setUpdateData } from '../../redux/admin/admin.actions';
import { selectOriginalData, selectUpdatedData } from '../../redux/admin/admin.selectors';

import StockRow from '../admin-stock-row/admin-stock-row.component';

import {AdminStockCont, CollectionTitle, StockTableCont, StockHeaderCont, TableHeader, ButtonsCont} from './admin-stock.styles';

const AdminStock = ({ originalData, updateData, setOriginalData, setUpdateData}) => {
  const [original, setOriginal] = useState(originalData)
  const [updated, setUpdated] = useState(updateData);
  console.log('updated', updateData.plants.items[0])
  console.log('original', originalData.plants.items[0])

  const handleUpdate = () => {
    setOriginal(updateData);
    setOriginalData(updateData);
    addCollectionAndDocuments('collections', updateData.plants);
  }
  
  const handleReset = () => { 
    // Problems with reset because of my onChange work-around at line 12 - admin-stock-row.component.jsx
    setUpdated(originalData);
    setUpdateData(originalData);
  }

  return ( 
    <AdminStockCont>
      <CollectionTitle>{original.plants.title}</CollectionTitle>
      <StockTableCont>
        <thead>
          <StockHeaderCont>
            <TableHeader>Id</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Latin Name</TableHeader>
            <TableHeader>Height</TableHeader>
            <TableHeader>Pot-size</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Stock</TableHeader>
            <TableHeader>Images</TableHeader>
          </StockHeaderCont>
        </thead>
        <tbody>
          {
            original.plants.items.map((item) => (
              <StockRow key={item.id} item={item}/>
            ))
          }
        </tbody>
      </StockTableCont>
      <ButtonsCont>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleReset}>Reset</button>
      </ButtonsCont>
    </AdminStockCont>
  );
}

const mapDispatchToProps = dispatch => ({
  setOriginalData: data => dispatch(setOriginalData(data)),
  setUpdateData: data => dispatch(setUpdateData(data))
});

const mapStateToProps = createStructuredSelector({
  originalData: selectOriginalData,
  updateData: selectUpdatedData
});
 
export default connect(mapStateToProps, mapDispatchToProps)(AdminStock);