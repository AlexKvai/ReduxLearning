import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAction, removeCustomerAction} from "./store/customerReducer";
import {addCashAction, getCashAction} from "./store/cashReducer";
import {fetchCustomers} from "./asyncActions/customers";

function App() {
  const dispatch = useDispatch()
  const cash  = useSelector(state => state.cash.cash)
  const customers  = useSelector(state => state.customers.customers)

  const getCash = (money) => {
      dispatch(getCashAction(money))
  }

  const addCash = (money) => {
      dispatch(addCashAction(money))
  }

  const addCustomer = (name) => {
        const customer = {
            name,
            id: Date.now(),
        }
        dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
      dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
        <div style={{fontSize: '30px'}}>
            {cash}
        </div>
        <div style={{display: 'flex'}}>
            <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
            <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
            <button onClick={() => addCustomer(prompt())}>Add client</button>
            <button onClick={() => dispatch(fetchCustomers())}>Get client from base</button>
        </div>
        <div>
            {customers.length > 0 ? <div>{customers.map(customer => <div onClick={() => removeCustomer(customer)}>{customer.name}</div>)}</div> : <div>Клиентов нет</div>}
        </div>
    </div>
  );
}

export default App;
