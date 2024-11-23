export default function MenuItem({ value }) {
  return (
    <li className={value.soldOut ? "menu-item sold-out" : "menu-item"}>
      <img src={require(`../../${value.photoName}`)} alt={value.name} />
      <div>
        <h3>{value.name}</h3>
        <p>{value.ingredients}</p>
        <span>{value.soldOut ? 'SOLD OUT' : value.price}</span>
      </div>
    </li>
  );
}
