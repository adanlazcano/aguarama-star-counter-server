import mongoose from 'mongoose';
import { environment } from './config.js';

// Database connection
try {

    const { url_database } = environment;

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
