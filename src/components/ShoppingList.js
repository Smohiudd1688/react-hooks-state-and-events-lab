import React, {useState} from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedValue, setSelectedValue] = useState("All");
  
  function handleChange(event) {
    setSelectedValue(event.target.value);
  }

  const newItems = items.filter(item => {
    if (selectedValue === "All") {
      return true
    } else {
      return selectedValue === item.category;
    }
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {newItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
