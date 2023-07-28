import { useState } from "react";
import "./index.css";
import Logo from "./Logo";
import Form from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

function App() {
  const [initialItems, setInitialItems] = useState([]);

  return (
    <div className="app">
      <Logo />
      <Form initialItems={initialItems} setInitialItems={setInitialItems} />
      <PackingList
        initialItems={initialItems}
        setInitialItems={setInitialItems}
      />
      <Stats items={initialItems} />
    </div>
  );
}

export default App;
