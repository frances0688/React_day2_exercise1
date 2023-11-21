import {useState} from "react";

const Counter = (props) => {
    const [counter,
        setCounter] = useState(props.counterStart);
    const increase = () => {
        setCounter(counter + props.plusMinus);
    };
    const decrease = () => {
        setCounter(counter - props.plusMinus);
    };
    return <div>
        <button onClick={decrease}>-</button>
        {counter}
        <button onClick={increase}>+</button>
    </div>;
};

export default Counter;