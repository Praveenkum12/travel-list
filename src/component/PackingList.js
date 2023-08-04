import { useState } from 'react';
import { Item } from './Item.js';

export default function PackingList({
  items,
  onDelete,
  onHandleToggleItem,
  onReset,
}) {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;
  if (sortBy === 'input') sortedItems = items;
  if (sortBy === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map(item => (
          <Item
            item={item}
            onDelete={onDelete}
            key={item.id}
            onHandleToggleItem={onHandleToggleItem}
          />
        ))}
      </ul>

      <div className="action">
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">Sort by input orders</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onReset}>Clear list</button>
      </div>
    </div>
  );
}
