import AppButton from "../shared/AppButton";

export default function Friend({ data, selectFn, isSelected}) {

    const balance = data.balance;
    let statement;
    if (balance < 0) {
        statement = <p className="red">{`You owe ${data.name} ${-balance} $`}</p>
    } else if(balance == 0) {
        statement = <p>{`You and ${data.name} are even`}</p>
    } else {
        statement = <p className="green">{`${data.name} owes you ${balance} $`}</p>
    }

    return (
        <li className={isSelected ? "selected" : ""}>
            <img src={data.image} alt={data.name} />
            <h3>{data.name}</h3>
            {statement}
            <AppButton text="Select" clickFn={() => selectFn(data.id)}/>
        </li>
    )
}