// import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Orders from './pages/Orders';
import Products from './pages/Products';
import LocalStorage from './pages/LocalStorage';
import { Provider } from 'react-redux';
import configureStore from './store';
import AsyncAwaitExp from './pages/AsyncAwaitExp';
import UploadFile from './codestepbystep/UploadFile';
import EnableDisableButton from './pages/EnableDisableButton';
import ExpenseItem from './tech_gun/component/ExpenseItem';
import ObjectOperation from './pages/ObjectOperation';
const store = configureStore()

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/category">Category</Link>
              </li>
              <li>
                <Link to="/order">Orders</Link>
              </li>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/localstorage">LocalStorage</Link>
              </li>
              <li>
                <Link to="/asyncawait">AsyncAwaitExp</Link>
              </li>
              <li>
                <Link to="/uploadfile">UploadFile</Link>
              </li>
              <li>
                <Link to="/enabledisable">Enable/Disable Button</Link>
              </li>
              <li>
                <Link to="/objectoperation">Object Operation</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact={true} path="/category" component={Category}></Route>
            <Route exact={true} path="/order" component={Orders}></Route>
            <Route exact={true} path="/" component={Home}></Route>
            <Route exact={true} path="/localstorage" component={LocalStorage}></Route>
            <Route exact={true} path="/asyncawait" component={AsyncAwaitExp}></Route>
            <Route exact={true} path="/uploadfile" component={UploadFile}></Route>
            <Route exact={true} path="/enabledisable" component={EnableDisableButton}></Route>
            <Route exact={true} path="/objectoperation" component={ObjectOperation}></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
    </div>
    //tech gun
    // <div>
    //   <ExpenseItem />
    // </div>
  );
}

export default App;
