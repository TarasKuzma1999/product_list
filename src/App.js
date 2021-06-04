import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Product from './components/Product';
import ProductList from './components/product-list';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/"><ProductList /></Route>        
        <Route path="/product/:id"><Product /></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
