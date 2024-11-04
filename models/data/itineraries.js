import 'dotenv/config.js';
import '.../config/dataBase.js';
import Itinerary from "../Itinerary.js";

const itineraries = [
    {
        "userName": "Juan Pérez",
        "userPhoto": "https://plus.unsplash.com/premium_photo-1673866484792-c5a36a6c025e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
        "price": 4,
        "duration": 3,
        "hashtags": ["#Culture", "#Adventure", "#History", "#Exploration", "#Travel"],
        "city": ""
    },
    {
        "userName": "Ana Gómez",
        "userPhoto": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "price": 5,
        "duration": 5,
        "hashtags": ["#Gastronomy", "#Travel", "#Food", "#Culture", "#Flavor"],
        "city": ""
    },
    {
        "userName": "Diego Fernández",
        "userPhoto": "https://unsplash.com/photos/man-in-black-beanie-cap-kVg2DQTAK7c",
        "price": 3,
        "duration": 3,
        "hashtags": ["#Culture", "#Music", "#Entertainment", "#Parties", "#Vibes"],
        "city": ""
    },
    {
        "userName": "Sofía Martínez",
        "userPhoto": "https://images.unsplash.com/photo-1499557354967-2b2d8910bcca?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "price": 4,
        "duration": 4,
        "hashtags": ["#Culture", "#Architecture", "#Art", "#History", "#Design"],
        "city": ""
    },
    {
        "userName": "Lucas Silva",
        "userPhoto": "",
        "price": 2,
        "duration": 2,
        "hashtags": ["#Night", "#Fun", "#Party", "#Music", "#Social"],
        "city": ""
    },
    {
        "userName": "Thiago Costa",
        "userPhoto": "",
        "price": 5,
        "duration": 5,
        "hashtags": ["#Beer", "#Nightlife", "#Fun", "#Relax", "#Friends"],
        "city": ""
    },
    {
        "userName": "Fernanda Lima",
        "userPhoto": "",
        "price": 4,
        "duration": 3,
        "hashtags": ["#Culture", "#Gastronomy", "#Delights", "#Travel", "#Food"],
        "city": ""
    },
    {
        "userName": "María Rodríguez",
        "userPhoto": "",
        "price": 3,
        "duration": 4,
        "hashtags": ["#Beaches", "#Relax", "#Nature", "#Summer", "#Sun"],
        "city": ""
    },
    {
        "userName": "Mariana Silva",
        "userPhoto": "",
        "price": 5,
        "duration": 5,
        "hashtags": ["#Parties", "#Fun", "#Celebration", "#Friends", "#Music"],
        "city": ""
    },
    {
        "userName": "Carlos López",
        "userPhoto": "",
        "price": 1,
        "duration": 1,
        "hashtags": ["#Nature", "#Hiking", "#Adventure", "#Exercise", "#Exploration"],
        "city": ""
    },
    {
        "userName": "María López",
        "userPhoto": "",
        "price": 1,
        "duration": 1,
        "hashtags": ["#Hiking", "#Nature", "#Adventure", "#Health", "#Exercise"],
        "city": ""
    },
    {
        "userName": "Nicolás Vargas",
        "userPhoto": "",
        "price": 2,
        "duration": 2,
        "hashtags": ["#Culture", "#Music", "#Art", "#Fun", "#Entertainment"],
        "city": ""
    },
    {
        "userName": "Lucía Fernández",
        "userPhoto": "",
        "price": 3,
        "duration": 4,
        "hashtags": ["#Art", "#Culture", "#History", "#Creativity", "#Inspiration"],
        "city": ""
    },
    {
        "userName": "Juliana Castro",
        "userPhoto": "",
        "price": 4,
        "duration": 3,
        "hashtags": ["#Adventure", "#Hiking", "#Nature", "#Exploration", "#Exercise"],
        "city": ""
    },
    {
        "userName": "Fernando Castro",
        "userPhoto": "",
        "price": 4,
        "duration": 3,
        "hashtags": ["#Adventure", "#Hiking", "#Nature", "#Health", "#Exercise"],
        "city": ""
    },
    {
        "userName": "Santiago López",
        "userPhoto": "",
        "price": 3,
        "duration": 4,
        "hashtags": ["#Hiking", "#Nature", "#Adventure", "#Exploration", "#Exercise"],
        "city": ""
    },
    {
        "userName": "Isabel Torres",
        "userPhoto": "",
        "price": 5,
        "duration": 6,
        "hashtags": ["#Gastronomy", "#Culture", "#Food", "#Travel", "#Delights"],
        "city": ""
    },
    {
        "userName": "Juan Carlos",
        "userPhoto": "",
        "price": 2,
        "duration": 4,
        "hashtags": ["#Dances", "#Night", "#Fun", "#Party", "#Music"],
        "city": ""
    },
    {
        "userName": "Isabella Torres",
        "userPhoto": "",
        "price": 2,
        "duration": 4,
        "hashtags": ["#Parties", "#Night", "#Fun", "#Celebration", "#Friends"],
        "city": ""
    },
    {
        "userName": "Ricardo González",
        "userPhoto": "",
        "price": 2,
        "duration": 4,
        "hashtags": ["#Parties", "#Night", "#Fun", "#Celebration", "#Music"],
        "city": ""
    },
    {
        "userName": "Claudia Pérez",
        "userPhoto": "",
        "price": 3,
        "duration": 3,
        "hashtags": ["#Culture", "#Gastronomy", "#Delights", "#Food", "#Travel"],
        "city": ""
    },
    {
        "userName": "Clara Jiménez",
        "userPhoto": "",
        "price": 1,
        "duration": 2,
        "hashtags": ["#History", "#Architecture", "#Culture", "#Exploration", "#Art"],
        "city": ""
    },
    {
        "userName": "David Morales",
        "userPhoto": "",
        "price": 4,
        "duration": 5,
        "hashtags": ["#Culture", "#Art", "#History", "#Exploration", "#Travel"],
        "city": ""
    },
    {
        "userName": "Verónica Ramos",
        "userPhoto": "",
        "price": 5,
        "duration": 5,
        "hashtags": ["#Culture", "#Gastronomy", "#Food", "#Delights", "#Travel"],
        "city": ""
    },
    {
        "userName": "María González",
        "userPhoto": "",
        "price": 4,
        "duration": 3,
        "hashtags": ["#Culture", "#History", "#Exploration", "#Art", "#Travel"],
        "city": ""
    },
    {
        "userName": "Luis Miguel",
        "userPhoto": "",
        "price": 3,
        "duration": 4,
        "hashtags": ["#Gastronomy", "#Adventure", "#Delights", "#Culture", "#Food"],
        "city": ""
    },
    {
        "userName": "Alberto Pérez",
        "userPhoto": "",
        "price": 4,
        "duration": 3,
        "hashtags": ["#Culture", "#Beer", "#Nightlife", "#Fun", "#Friends"],
        "city": ""
    },
    {
        "userName": "Tatiana Herrera",
        "userPhoto": "",
        "price": 5,
        "duration": 5,
        "hashtags": ["#Gastronomy", "#Travel", "#Delights", "#Food", "#Culture"],
        "city": ""
    },
    {
        "userName": "Fernando González",
        "userPhoto": "",
        "price": 3,
        "duration": 3,
        "hashtags": ["#History", "#Architecture", "#Culture", "#Art", "#Exploration"],
        "city": ""
    },
    {
        "userName": "María Luisa",
        "userPhoto": "",
        "price": 4,
        "duration": 4,
        "hashtags": ["#Culture", "#Adventure", "#Exploration", "#Nature", "#Travel"],
        "city": ""
    },
    {
        "userName": "Andrés Castro",
        "userPhoto": "",
        "price": 5,
        "duration": 5,
        "hashtags": ["#Beer", "#Music", "#Fun", "#Nightlife", "#Parties"],
        "city": ""
    },
    {
        "userName": "Camila Fernández",
        "userPhoto": "",
        "price": 3,
        "duration": 2,
        "hashtags": ["#Culture", "#History", "#Art", "#Exploration", "#Creativity"],
        "city": ""
    },
    {
        "userName": "Álvaro Reyes",
        "userPhoto": "",
        "price": 2,
        "duration": 3,
        "hashtags": ["#Nature", "#Hiking", "#Adventure", "#Exploration", "#Health"],
        "city": ""
    },
    {
        "userName": "Luciana Martínez",
        "userPhoto": "",
        "price": 4,
        "duration": 4,
        "hashtags": ["#Culture", "#Parties", "#Fun", "#Celebration", "#Music"],
        "city": ""
    }
];


Itinerary.insertMany(itineraries)
    .then(() => {
        console.log('Itinerarios insertados correctamente');
    })
    .catch(error => {
        console.error('Error al insertar itinerarios:', error);
    });
