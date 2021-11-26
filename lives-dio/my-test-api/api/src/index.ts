import express from 'express';
import { 
    ping
 } from './controller';


const app = express();
app.use(express.json());

app.post('/ping', ping );

app.listen(8000, () => {
    console.log("Runding app 8000...");
});