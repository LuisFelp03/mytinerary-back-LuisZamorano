import 'dotenv/config.js';
import '../config/dataBase.js';
import City from '../models/City.js';

const cities = [
    { name: 'New York', photo: 'https://image.nuevayork.com/wp-content/uploads/2020/03/New-York-Helicopter-Tour-2.eric_both.bottom_right.jpg.webp', country: 'United States', continent: 'North America', description: 'The most populous city in the United States.', currency: 'USD' },
    { name: 'Paris', photo: 'https://media.iatiseguros.com/wp-content/uploads/sites/6/2018/12/01065501/torre-eiffel-paris.jpg', country: 'France', continent: 'Europe', description: 'The capital of France, known for its art, fashion, and culture.', currency: 'EUR' },
    { name: 'Tokyo', photo: 'https://assets.editorial.aetnd.com/uploads/2013/07/gettyimages-1390815938.jpg', country: 'Japan', continent: 'Asia', description: 'The bustling capital of Japan, a major economic hub.', currency: 'JPY' },
    { name: 'Sydney', photo: 'https://media.tatler.com/photos/6141d37b9ce9874a3e40107d/16:9/w_2560%2Cc_limit/social_crop_sydney_opera_house_gettyimages-869714270.jpg', country: 'Australia', continent: 'Australia', description: 'Famous for the Sydney Opera House and beautiful beaches.', currency: 'AUD' },
    { name: 'Cairo', photo: 'https://media.cntraveler.com/photos/655cdf1d2d09a7e0b27741b5/16:9/w_2560%2Cc_limit/Cairo%2520Egypt_GettyImages-1370918272.jpg', country: 'Egypt', continent: 'Africa', description: 'The largest city in Africa, home to the Great Pyramids.', currency: 'EGP' },
    { name: 'Buenos Aires', photo: 'https://vamospanish.com/wp-content/uploads/live-in-buenos-aires-1024x574.jpg', country: 'Argentina', continent: 'South America', description: 'The vibrant capital of Argentina, famous for tango and football.', currency: 'ARS' },
    { name: 'London', photo: 'https://cdn.britannica.com/01/94501-050-7C939333/Big-Ben-London.jpg', country: 'United Kingdom', continent: 'Europe', description: 'The capital city of the United Kingdom, known for its history and landmarks.', currency: 'GBP' },
    { name: 'Moscow', photo: 'https://salviatravelsindia.com/wp-content/uploads/2020/09/moscow-Saint-Basil-Cathedral2jpg.jpg', country: 'Russia', continent: 'Europe', description: 'The capital of Russia, known for its architecture and Red Square.', currency: 'RUB' },
    { name: 'Rio de Janeiro', photo: 'https://res.cloudinary.com/worldpackers/image/upload/c_fill,f_auto,h_500,q_auto,w_1024/v1/guides/article_cover/dtceexjjoji0w1ikkp2k', country: 'Brazil', continent: 'South America', description: 'Known for its Carnival festival and the Christ the Redeemer statue.', currency: 'BRL' },
    { name: 'Toronto', photo: 'https://www.airtransat.com/getmedia/c561ff6f-e480-4b8c-8b27-361d2b1e5ad3/Toronto-downtown-skyline-1000x600.aspx?width=1000&height=600&ext=.jpg', country: 'Canada', continent: 'North America', description: 'The largest city in Canada, known for its multicultural population.', currency: 'CAD' },
    { name: 'Berlin', photo: 'https://img.static-kl.com/images/media/A9EB8D2D-C180-4F6C-877C3D4A44BBFF3F', country: 'Germany', continent: 'Europe', description: 'The capital of Germany, known for its history and modern culture.', currency: 'EUR' },
    { name: 'Cape Town', photo: 'https://www.cruiseandtravel.co.uk/wp-content/uploads/2018/09/2CK09C2-1.jpg', country: 'South Africa', continent: 'Africa', description: 'A beautiful coastal city with stunning landscapes and rich history.', currency: 'ZAR' },
    { name: 'Dubai', photo: 'https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg', country: 'United Arab Emirates', continent: 'Asia', description: 'A modern city known for luxury shopping, ultramodern architecture, and lively nightlife.', currency: 'AED' },
    { name: 'Bangkok', photo: 'https://content.r9cdn.net/rimg/dimg/26/5b/01e97574-city-26166-1592813274a.jpg?width=1366&height=768&xhint=1038&yhint=725&crop=true', country: 'Thailand', continent: 'Asia', description: 'The bustling capital of Thailand, known for its street life and cultural landmarks.', currency: 'THB' },
    { name: 'Rome', photo: 'https://worldstrides.com/wp-content/uploads/2015/07/api268.jpg', country: 'Italy', continent: 'Europe', description: 'The capital of Italy, known for its nearly 3,000 years of globally influential art, architecture, and culture.', currency: 'EUR' }
];

// Insertar las ciudades en la base de datos
City.insertMany(cities)
    .then(() => {
        console.log("Cities successfully inserted");
        process.exit();
    })
    .catch(error => {
        console.error("Error inserting cities:", error);
        process.exit(1);
    });
