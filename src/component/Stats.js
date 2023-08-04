export default function Stats({ items }) {
  const numItems = items.length;
  const numPackedItems = items.filter(item => item.packed).length;
  const percentage = (numPackedItems / numItems) * 100;
  if (!numItems)
    return (
      <footer className="stats">
        <em>Lets start listing the things that need for our tour</em>
      </footer>
    );

  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? 'You got everything! Ready to go✈️'
          : `💼 You have ${numItems} items on your list, and you already packed
        ${numPackedItems} (${Math.round(percentage)}%)`}
      </em>
    </footer>
  );
}
