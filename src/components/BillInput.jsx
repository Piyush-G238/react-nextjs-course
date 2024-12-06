export default function BillInput({ onChangeFn }) {
  function setAmount(event) {
    const { value } = event.target;
    console.log(+value);
    onChangeFn(+value);
  }

  return (
    <div>
      <span>How much was the bill?</span>
      <input
        type="number"
        name="billAmount"
        id="billAmount"
        onChange={setAmount}
      />
    </div>
  );
}
