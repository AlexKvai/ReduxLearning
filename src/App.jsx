import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const dispatch = useDispatch()
  const cash  = useSelector(state => state.cash.cash)

  const getCash = (money) => {
      dispatch({type: 'GET_CASH', payload: money})
  }

  const addCash = (money) => {
      dispatch({type: 'ADD_CASH', payload: money})
  }

  return (
    <div className="App">
        <div style={{fontSize: '30px'}}>
            {cash}
        </div>
        <div style={{display: 'flex'}}>
            <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
            <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
        </div>
    </div>
  );
}

export default App;
