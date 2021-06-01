;
import{useEffect,useState} from 'react' ;

useEffect(() =>{
 fetch('https://fakestoreapi.com/products')
 .then(Responce =>{Responce.json}) 
 .then(products => console.log(products)) 
    
    
}    
,[]);