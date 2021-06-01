import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react';

function App() {
const [products,setProducst] = useState([]);
     useEffect(() => {  
 fetch('https://fakestoreapi.com/products')
 .then(responce =>responce.json()) 
 .then(data => setProducts = data)    
     }, []);
    };

    return (
    <div className='App'>
{prducts.map(product => product.title)}
    </div>
    );
export default App;
