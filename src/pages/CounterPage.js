import useCounter from "../hooks/use-counter";
import Button from "../components/Button";

function CounterPage({ initialCount }) {
  const { count, increment, decrement } = useCounter(initialCount);
  return (
    <div>
      <h1>Count is {count}</h1>
      <Button primary onClick={increment}>
        Increment
      </Button>
      <Button primary onClick={decrement}>
        Decrement
      </Button>
    </div>
  );
}
export default CounterPage;
