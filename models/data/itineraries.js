import 'dotenv/config.js';
import '../../config/dataBase.js';
import Itinerary from "../Itinerary.js";

const itineraries = [
    {
        "publisherName": "Gabriela Torres",
        "publisherPhoto": "https://images.unsplash.com/photo-1505033575518-a36ea2ef75ae?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "price": 4,
        "duration": 3,
        "hashtags": ["#Culture", "#Art", "#Paris", "#Exploration"],
        "cityId": "6728c7e948470291eb95491f" // Paris
    },
    {
        "publisherName": "Carlos Méndez",
        "publisherPhoto": "https://images.unsplash.com/photo-1620000617482-821324eb9a14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "price": 3,
        "duration": 2,
        "hashtags": ["#Gastronomy", "#Paris", "#FrenchCuisine", "#Foodie"],
        "cityId": "6728c7e948470291eb95491f" // Paris
    },
    {
        "publisherName": "Lucía Pérez",
        "publisherPhoto": "https://images.unsplash.com/photo-1620000617495-02d687f9ecec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "price": 5,
        "duration": 4,
        "hashtags": ["#London", "#Royalty", "#History", "#Architecture"],
        "cityId": "6728c7e948470291eb954924" // London
    },
    {
        "publisherName": "Fernando Silva",
        "publisherPhoto": "https://images.unsplash.com/photo-1711000142551-ca65827c57c3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "price": 4,
        "duration": 3,
        "hashtags": ["#London", "#Music", "#Nightlife", "#Fun"],
        "cityId": "6728c7e948470291eb954924" // London
    },
    {
        "publisherName": "Sofia Martinez",
        "publisherPhoto": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "price": 2,
        "duration": 5,
        "hashtags": ["#Tokyo", "#Anime", "#CulturalExperience", "#Adventure"],
        "cityId": "6728c7e948470291eb954920" // Tokyo
    },
    {
        "publisherName": "Pedro Gómez",
        "publisherPhoto": "https://images.unsplash.com/photo-1559772966-26039fe87019?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyZmlsJTIwcGhvdG98ZW58MHx8MHx8fDA%3D",
        "price": 3,
        "duration": 3,
        "hashtags": ["#Tokyo", "#Technology", "#Innovation", "#Exploration"],
        "cityId": "6728c7e948470291eb954920" // Tokyo
    },
    {
        "publisherName": "Ana Costa",
        "publisherPhoto": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "price": 4,
        "duration": 4,
        "hashtags": ["#Cairo", "#Pyramids", "#AncientHistory", "#Exploration"],
        "cityId": "6728c7e948470291eb954922" // Cairo
    },
    {
        "publisherName": "Mario Ruiz",
        "publisherPhoto": "https://images.unsplash.com/photo-1609010697446-11f2155278f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcmZpbCUyMHBob3RvfGVufDB8fDB8fHww",
        "price": 3,
        "duration": 5,
        "hashtags": ["#Cairo", "#Markets", "#EgyptianCulture", "#Adventure"],
        "cityId": "6728c7e948470291eb954922" // Cairo
    },
    {
        "publisherName": "Camila Vásquez",
        "publisherPhoto": "https://images.unsplash.com/photo-1579591919791-0e3737ae3808?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBlcmZpbCUyMHBob3RvfGVufDB8fDB8fHww",
        "price": 5,
        "duration": 3,
        "hashtags": ["#Toronto", "#Multicultural", "#ArtScene", "#Festivals"],
        "cityId": "6728c7e948470291eb954927" // Toronto
    },
    {
        "publisherName": "Diego Morales",
        "publisherPhoto": "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "price": 2,
        "duration": 2,
        "hashtags": ["#Toronto", "#Nature", "#Parks", "#Adventure"],
        "cityId": "6728c7e948470291eb954927" // Toronto
    },
    {
        "publisherName": "Laura Herrera",
        "publisherPhoto": "https://images.unsplash.com/photo-1542157585-ef20bfcce579?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "price": 3,
        "duration": 4,
        "hashtags": ["#Berlin", "#History", "#Culture", "#Art"],
        "cityId": "6728c7e948470291eb954928" // Berlin
    },
    {
        "publisherName": "Javier Ortiz",
        "publisherPhoto": "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "price": 4,
        "duration": 3,
        "hashtags": ["#Berlin", "#Nightlife", "#Music", "#Fun"],
        "cityId": "6728c7e948470291eb954928" // Berlin
    },
    {
        "publisherName": "Renata Cruz",
        "publisherPhoto": "https://images.unsplash.com/photo-1579105728744-9d6b14a45389?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcmZpbCUyMHBob3RvfGVufDB8fDB8fHww",
        "price": 4,
        "duration": 3,
        "hashtags": ["#Rio", "#Beaches", "#Carnival", "#Dance"],
        "cityId": "6728c7e948470291eb954926" // Rio de Janeiro
    },
    {
        "publisherName": "Luis Alberto",
        "publisherPhoto": "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "price": 5,
        "duration": 5,
        "hashtags": ["#Rio", "#ChristTheRedeemer", "#Adventure", "#Hiking"],
        "cityId": "6728c7e948470291eb954926" // Rio de Janeiro
    }
    // Agrega más itinerarios aquí siguiendo este mismo formato
];




Itinerary.insertMany(itineraries)
    .then(() => {
        console.log('Itineraries inserted correctly');
    })
    .catch(error => {
        console.error('Error when inserting itineraries:', error);
    });
