export function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input type="checkbox" onChange={onToggleItem} checked={item.packed} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={onDeleteItem}>❌</button>
    </li>
  );
}
