import "./counter.scss";

export interface CounterInterface {
  counter: number;
  changeCounterValue: (counter: number) => void;
}

const Counter: React.FC<CounterInterface> = ({ counter, changeCounterValue }) => {
  return (
    <div className="counter__container">
      <button className="counter__button" disabled={counter <= 0} onClick={() => changeCounterValue(Math.max(counter - 1))}>
        -
      </button>
      <div className="counter__text">{counter}</div>
      <button className="counter__button" onClick={() => changeCounterValue(counter + 1)}>
        +
      </button>
    </div>
  );
};

export default Counter;
