import 'dotenv/config.js';
import '../config/dataBase.js';
import City from '../models/City.js';

const cities = [
    { name: 'New York', photo: 'https://example.com/newyork.jpg', country: 'United States', continent: 'North America', description: 'The most populous city in the United States.', currency: 'USD' },
    { name: 'Paris', photo: 'https://example.com/paris.jpg', country: 'France', continent: 'Europe', description: 'The capital of France, known for its art, fashion, and culture.', currency: 'EUR' },
    { name: 'Tokyo', photo: 'https://example.com/tokyo.jpg', country: 'Japan', continent: 'Asia', description: 'The bustling capital of Japan, a major economic hub.', currency: 'JPY' },
    { name: 'Sydney', photo: 'https://example.com/sydney.jpg', country: 'Australia', continent: 'Australia', description: 'Famous for the Sydney Opera House and beautiful beaches.', currency: 'AUD' },
    { name: 'Cairo', photo: 'https://example.com/cairo.jpg', country: 'Egypt', continent: 'Africa', description: 'The largest city in Africa, home to the Great Pyramids.', currency: 'EGP' },
    { name: 'Buenos Aires', photo: 'https://example.com/buenosaires.jpg', country: 'Argentina', continent: 'South America', description: 'The vibrant capital of Argentina, famous for tango and football.', currency: 'ARS' },
    { name: 'London', photo: 'https://example.com/london.jpg', country: 'United Kingdom', continent: 'Europe', description: 'The capital city of the United Kingdom, known for its history and landmarks.', currency: 'GBP' },
    { name: 'Moscow', photo: 'https://example.com/moscow.jpg', country: 'Russia', continent: 'Europe', description: 'The capital of Russia, known for its architecture and Red Square.', currency: 'RUB' },
    { name: 'Rio de Janeiro', photo: 'https://example.com/rio.jpg', country: 'Brazil', continent: 'South America', description: 'Known for its Carnival festival and the Christ the Redeemer statue.', currency: 'BRL' },
    { name: 'Toronto', photo: 'https://example.com/toronto.jpg', country: 'Canada', continent: 'North America', description: 'The largest city in Canada, known for its multicultural population.', currency: 'CAD' },
    { name: 'Berlin', photo: 'https://example.com/berlin.jpg', country: 'Germany', continent: 'Europe', description: 'The capital of Germany, known for its history and modern culture.', currency: 'EUR' },
    { name: 'Cape Town', photo: 'https://example.com/capetown.jpg', country: 'South Africa', continent: 'Africa', description: 'A beautiful coastal city with stunning landscapes and rich history.', currency: 'ZAR' },
    { name: 'Dubai', photo: 'https://example.com/dubai.jpg', country: 'United Arab Emirates', continent: 'Asia', description: 'A modern city known for luxury shopping, ultramodern architecture, and lively nightlife.', currency: 'AED' },
    { name: 'Bangkok', photo: 'https://example.com/bangkok.jpg', country: 'Thailand', continent: 'Asia', description: 'The bustling capital of Thailand, known for its street life and cultural landmarks.', currency: 'THB' },
    { name: 'Rome', photo: 'https://example.com/rome.jpg', country: 'Italy', continent: 'Europe', description: 'The capital of Italy, known for its nearly 3,000 years of globally influential art, architecture, and culture.', currency: 'EUR' }
];

// Insertar las tiendas en la base de datos
City.insertMany(cities)
    .then(() => {
        console.log("Cities successfully inserted");
        process.exit();
    })
    .catch(error => {
        console.error("Error inserting cities:", error);
        process.exit(1);
    });
