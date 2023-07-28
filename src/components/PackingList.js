import { useState } from "react";
import { Item } from "./Item";

export function PackingList({ initialItems, setInitialItems }) {
  const [sortBy, setSortBy] = useState("input");
  function handleDeleteItem(id) {
    setInitialItems((items) => items.filter((i) => i.id !== id));
  }

  function handleToggleItem(id) {
    const newItems = initialItems.map((item) =>
      item.id !== id ? item : { ...item, packed: !item.packed }
    );
    setInitialItems(newItems);
  }

  let sortedItems;

  if (sortBy === "input") {
    sortedItems = initialItems;
  } else if (sortBy === "description") {
    sortedItems = initialItems
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  } else {
    sortedItems = initialItems
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  function handleClear() {
    const confirm = window.confirm(
      "Are you sure you want to delete all items?"
    );
    confirm && setInitialItems([]);
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((eachItem) => (
          <Item
            item={eachItem}
            key={eachItem.id}
            onDeleteItem={() => handleDeleteItem(eachItem.id)}
            onToggleItem={() => handleToggleItem(eachItem.id)}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
}
