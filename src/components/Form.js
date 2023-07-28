import { useState } from "react";
export default function Form({ initialItems, setInitialItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("1");
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = {
      description,
      quantity,
      packed: false,
      id: initialItems.length,
    };

    setInitialItems([...initialItems, newItem]);
    setQuantity(1);
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip ?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
