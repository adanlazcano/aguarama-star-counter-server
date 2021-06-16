import express from 'express';
import { getClient, getClients, removeStar, addStar, saveClient, resetStars } from '../controllers/Client.js';

const ClientRoute = express.Router();

// Get Participants (Clients)
ClientRoute.get('/', getClients);

// Participants register
ClientRoute.post('/', saveClient);

// Get participant per ID
ClientRoute.get('/:cel', getClient);

// Add Star to participant
ClientRoute.put('/star/add', addStar);

//Remove Star to participant
ClientRoute.put('/star/remove', removeStar);

// Reset Stars to participants
ClientRoute.put('/star/reset', resetStars);


export default ClientRoute;