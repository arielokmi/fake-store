import logo from './logo.svg';
import './App.css';
import {useEffect ,useState} from 'react';
import Product from './Product';
function App() {
  const [products,setProducts] = useState([]);

  useEffect(() => {  
fetch('https://fakestoreapi.com/products')
.then(responce =>responce.json()) 
.then(data => setProducts(data));  
  }, []);

 return (
 <div className='App'>
{products.map(product => <Product {...product}/>)}
 </div>
 );
}

export default App;
