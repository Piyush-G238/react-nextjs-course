export default function MenuItem({ value }) {
  return (
    <li className="menu-item">
      <div>
        <img src={require(`../../${value.photoName}`)} alt={value.name} />
        <h3>{value.name}</h3>
        <p>{value.ingredients}</p>
        <span>{value.price}</span>
      </div>
    </li>
  );
}
