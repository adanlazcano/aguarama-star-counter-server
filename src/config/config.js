import dotenv from 'dotenv';
dotenv.config();

// Environment Variables Config

export const environment = {

    port: process.env.PORT,
    url_database: process.env.MONGODB_ATLAS_URL
}
