import './App.scss';
import Hello from './Hello';
import UseEffect from './UseEffect';
import UseContext from "./useContext"
import UseReducer from "./useReducer"
import UseReducerDemo from "./useReducerDemo"
import NouseMemo from "./UseMemo/NouseMemo"
import UseMemo from './UseMemo/UseMemo';
import UseRef from './UseRef/index';
import UserDefined from './UserDefined/index';

function App() {
  return (
    <div className="App">
          Learn React-Hooks
          <Hello></Hello>
          <h1>UseEffect</h1>
          <UseEffect></UseEffect>
          <h1>UseContext</h1>
          <UseContext></UseContext>
          <h1>UseReducer</h1>
          <UseReducer></UseReducer>
          <h1>UseReducerDemo</h1>
          <UseReducerDemo></UseReducerDemo>
          <h1>UseReducerDemo</h1>
          <UseReducerDemo></UseReducerDemo>
          <h1>NouseMemo</h1>
          <NouseMemo></NouseMemo>
          <h1>UseMemo</h1>
          <UseMemo></UseMemo>
          <h1>UseRef</h1>
          <UseRef></UseRef>
          <h1>UserDefined</h1>
          <UserDefined></UserDefined>
    </div>
  );
}

export default App;
