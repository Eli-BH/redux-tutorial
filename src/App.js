import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  counterSelector,
} from "./redux/counter";
import "./app.css";

import { peopleSelector, fetchPeople } from "./redux/people";

const App = () => {
  const dispatch = useDispatch();
  const { count } = useSelector(counterSelector);
  const { people, loading } = useSelector(peopleSelector);

  const fetchPerson = () => {
    dispatch(fetchPeople());
    console.log(people);
  };

  return (
    <div className="App">
      <h1>Counter: {count}</h1>

      <div className="counter">
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(incrementByAmount(42))}>
          Increment by 42
        </button>
      </div>

      <h1>People</h1>
      <button onClick={fetchPerson}>Get Person</button>
      <div className="people">
        {loading ? (
          <h1>Loading</h1>
        ) : (
          people?.map((item, index) => (
            <div key={index}>
              <img src={item.picture.medium} alt={item.name.first} />
              <p>{`${item.name.first} ${item.name.last}`}</p>
              <p>{`${item.cell}`}</p>
              <p>
                <b>{`${item.email}`}</b>
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default App;
