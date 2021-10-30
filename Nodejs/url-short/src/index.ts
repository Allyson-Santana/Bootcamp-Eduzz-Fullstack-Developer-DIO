import express from 'express';
import { URLController } from './controllers/URLController';
import { MongoConnection } from 'database/MongoConnection';
 
const api = express();
api.use(express.json());

const database = new MongoConnection();
database.connect();

const urlController = new URLController();

api.get('/:hash',  urlController.redirect);
api.post('/shorten', urlController.shorten);


api.listen(3000, () => { console.log('Express runnding...') }); 