import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { setUpdateData } from '../../redux/admin/admin.actions';
import { selectOriginalData, selectUpdatedData } from '../../redux/admin/admin.selectors';

import StockRow from '../admin-stock-row/admin-stock-row.component';

import {AdminStockCont, CollectionTitle, StockTableCont, StockHeaderCont, TableHeader, ButtonsCont} from './admin-stock.styles';

const AdminStock = (props) => {
  const [original, setOriginal] = useState(props.originalData)
  const [updated, setUpdated] = useState(props.updateData);
  console.log(props)
  
  const plants = original.plants;

  const handleUpdate = () => {
    
  }
  
  const handleReset = () => {

  }

  return ( 
    <AdminStockCont>
      <CollectionTitle>{plants.title}</CollectionTitle>
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
            plants.items.map((item) => (
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
  setUpdateData: data => dispatch(setUpdateData(data))
});

const mapStateToProps = createStructuredSelector({
  originalData: selectOriginalData,
  updateData: selectUpdatedData
})
 
export default connect(mapStateToProps, mapDispatchToProps)(AdminStock);