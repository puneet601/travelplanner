export function Stats({ items }) {
  const numLength = items.length;
  const packedLength = items.filter((item) => item.packed).length;
  const prct = (packedLength * 100) / numLength;
  return (
    <footer className="stats">
      <em>
        {prct === 100
          ? "You are done packing"
          : `You have ${numLength} items on your list, and you've already packed ${prct}%`}
      </em>
    </footer>
  );
}
