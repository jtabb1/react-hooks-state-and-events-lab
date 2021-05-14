import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import item1sts from "../data/items";

function App() {
  const item2nds = item1sts.map( (item) =>
  {
    return {...item, inCart: false};
  });

  const [items, setItems] = useState(item2nds);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
      <ShoppingList items={items} setItems={setItems}/>
    </div>
  );
}

export default App;
