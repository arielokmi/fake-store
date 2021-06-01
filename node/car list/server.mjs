import express, { response } from 'express';
import fs from 'fs';

const app = express();

express.get('/',(request,response) =>{
if(response.query.age >= 18 ){
   const resuletStr = fs.writeFileSync('resulet.json',{encoding: 'UTF-8'}) 
   const resulet = JSON.parse(resuletStr);
       

}


});

app.listen(8080);

console.log("Server is listening on http://localhost:8080");