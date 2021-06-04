import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route, Switch,
  Link,
} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Product from './Components/Product';
import Order from './Components/Order';
import NotFound from './Components/Notfound';
import Customer from './Components/ProductList';
import AddProduct from './Components/AddProduct';
import AppHook from './Components/AppHook';
import ProductDetails from './Components/ProductDetails';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/Home" component={Home} />
          <Route path="/Product" component={Product} />
          <Route path="/Order" component={Order} />
          <Route path="/Customer" component={Customer} />
          <Route path="/AddProduct" component={AddProduct} />
          <Route path='/:id'>
            <ProductDetails />
          </Route>
          <Route component={NotFound} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;

