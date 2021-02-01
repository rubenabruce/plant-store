import StockRow from "../../components/admin-stock-row/admin-stock-row.component";

export const updateDataRow = (items, row) => {
  const existingItem = items.find(item => row.id === item.id);

  if (existingItem) {
    return items.map(item =>
      item.id === row.id 
        ? row
        : item 
    );
  }

  return [...items, {row}]
}



// export const addItemToCart = (cartItems, cartItemToAdd) => {
//   const existingCartItem = cartItems.find(cartItem => cartItemToAdd.id === cartItem.id);

//   if (existingCartItem) {
//     return cartItems.map(cartItem => 
//       cartItem.id === cartItemToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }

//   return [...cartItems, { ...cartItemToAdd, quantity: 1}];
// };
