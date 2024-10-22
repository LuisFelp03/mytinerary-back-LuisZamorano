import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.URI_MONGO;

if (!uri) {
    console.error('Error: URI_MONGO not defined in the file .env');
    process.exit(1);
}

mongoose.connect(uri)
    .then(() => console.log('Connection to MongoDB successful'))
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });
