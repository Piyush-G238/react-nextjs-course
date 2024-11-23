import MenuItem from "../menu-item/MenuItem";
import { pizzaData } from "../../data";
import { useState } from "react";

export default function MenuList() {
  const [numPizza, setNumPizza] = useState(pizzaData.length)

  if (numPizza > 0) {
    return (
      <ul className="menu-list">
        {
          pizzaData
            // .filter(pizza => !pizza.soldOut)
            .map((pizza, index) => <MenuItem value={pizza} key={index} />)
        }
      </ul>
    );
  }

  else {
    return (
      <div>
        <h1>We are working on our menus!</h1>
      </div>
    );
  }
}
