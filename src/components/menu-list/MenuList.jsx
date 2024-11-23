import MenuItem from "../menu-item/MenuItem";
import { pizzaData } from "../../data";

export default function MenuList() {
  return (
    <ul className="menu-list">
      {pizzaData.map((data, index) => {
        return <MenuItem value={data} key={index} />;
      })}
    </ul>
  );
}
