import { useState } from 'react';
import Logo from './Logo.js';
import Form from './Form.js';
import PackingList from './PackingList.js';
import Stats from './Stats.js';

export default function App() {
  const [items, setItems] = useState([]);

  function addingItems(item) {
    setItems(i => [...i, item]);
  }

  function handleDelete(id) {
    setItems(item => item.filter(el => el.id !== id));
  }

  function handleToggleItem(id) {
    setItems(items =>
      items.map(item =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  const handleReset = function () {
    const confirmed = window.confirm(
      'Are you sure you want to delete all items'
    );
    if (!confirmed) return;
    setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={addingItems} />
      <PackingList
        onReset={handleReset}
        items={items}
        onDelete={handleDelete}
        onHandleToggleItem={handleToggleItem}
      />
      <Stats items={items} />
    </div>
  );
}
