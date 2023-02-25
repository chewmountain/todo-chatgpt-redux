import { useSelector } from "react-redux";

export const MyComp = () => {
    const { count } = useSelector(state => state.counter);
    return (
        <div className="myComp">
            <h2>Hello world</h2>
            <h2>Count is: {count}</h2>
        </div>
    )
}