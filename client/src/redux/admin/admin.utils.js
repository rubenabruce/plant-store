
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

export const deleteDataRow = (items, row) => {
  const existingRow = items.find(item => row.id === item.id);

  if (existingRow) {
    return items.filter(item =>
      item.id !== existingRow.id
    );
  }

  return items;
}
