import Step from "./Step";

export default function Steps({ value, active }) {
    return (
        <div className='numbers'>
            {value.map((_, index) => <Step
                value={index + 1}
                isActive={active == (index + 1)}
                key={index} />)}
        </div>
    );
}