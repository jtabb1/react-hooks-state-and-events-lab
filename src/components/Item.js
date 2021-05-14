import React, { useState } from "react";

function Item({ name, category, inCart, id, items, setItems }) {
  const [isInCart, setIsInCart] = useState(inCart);

  function handleAddToCartClick(e) {
    setIsInCart((isInCart) => !isInCart);
    const boolVal = !(inCart);
    const newItemsArray = items.map((item) => {
      if (item.id === id) {
        return {...item, inCart: boolVal};
      } else {
        return item
      }
    });
    setItems(newItemsArray);
  }

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {isInCart ? `Remove From` : `Add to`} Cart
      </button>
    </li>
  );
}

export default Item;
