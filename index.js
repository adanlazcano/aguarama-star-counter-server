import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { enviroment } from './src/config/config.js';
import './src/config/database.js';
import ClientRoute from './src/routes/Client.js';
const app = express();

//settings
app.set('port', process.env.PORT || enviroment.port);
app.set('json spaces', 2);

//Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// home page
app.get('/', (_, res) => {
    res.send("Welcome to server");
});

//Routes

app.use('/api/client', ClientRoute);

// handler to not found pages
app.use((_, res) => {
    res.status(404).json({ message: "Page not found" })
});

app.listen(app.get('port'), _ => {
    try {
        console.log(`Server running on Port ${app.get('port')}`);
    } catch (error) {
        console.log(error.message);
    }
});