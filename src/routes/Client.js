import express from 'express';
import { getClient, getClients, removeStar, addStar, saveClient, resetStars } from '../controllers/Client.js';

const ClientRoute = express.Router();

ClientRoute.get('/', getClients);
ClientRoute.post('/', saveClient);
ClientRoute.get('/:cel', getClient);
ClientRoute.put('/star/add', addStar);
ClientRoute.put('/star/remove', removeStar);
ClientRoute.put('/star/reset', resetStars);


export default ClientRoute;