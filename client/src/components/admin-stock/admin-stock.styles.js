import styled from 'styled-components';

export const AdminStockCont = styled.div`
  width: 100%;
  height: 100%;
`;

export const CollectionTitle = styled.h2`
  width: 90%;
  margin: 40px auto auto;
  
`; 

export const StockTableCont = styled.table`
  width: 90%;
  margin: auto;
  border-collapse: collapse;

  td, th {
    border: 1px solid #999;
    padding: 0.5rem;
    text-align: left;

    input {
      width: 100%;
      height: 100%;
      padding: 0;
      border: none;
      font: inherit;
    }
  }
`; 

export const StockHeaderCont = styled.tr`

`;

export const TableHeader = styled.th`

`;

export const ButtonsCont = styled.div`
  width: 90%;
  margin: auto;
`;