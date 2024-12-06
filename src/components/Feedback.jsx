export default function Feedbck({ text, ratings, onChangeFn }) {
  function setTipShare(event) {
    const { value } = event.target;
    onChangeFn(+value);
  }

  return (
    <div>
      <span>{text}</span>
      <select name="billFeedback" id="billFeedback" onChange={setTipShare}>
        {ratings.map((rating, index) => {
          return (
            <option key={index} value={rating.value}>
              {rating.feedback} ({rating.value} %)
            </option>
          );
        })}
      </select>
    </div>
  );
}
