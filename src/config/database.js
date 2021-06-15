import mongoose from 'mongoose';
import { enviroment } from './config.js';

try {

    const { url_database } = enviroment;

    const dbOptions = {

        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    }

    mongoose.connect(url_database, dbOptions);

    console.log('Connect to mongoDB');

} catch (error) {

    console.log(error.message)
}