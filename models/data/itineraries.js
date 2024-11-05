import mongoose from "mongoose";
import 'dotenv/config.js';
import connectDatabase from "../../config/dataBase.js";
import Itinerary from "../Itinerary.js";

console.log("Starting itinerary insertion...");
connectDatabase();

mongoose.connection.once("open", () => {
    console.log("Connected to database");

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
            "publisherName": "Martín Chávez",
            "publisherPhoto": "https://images.unsplash.com/photo-1520975938439-0f6f4fa676c9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
            "price": 3,
            "duration": 2,
            "hashtags": ["#BuenosAires", "#Tango", "#Dance", "#Culture"],
            "cityId": "6728c7e948470291eb954923" // Buenos Aires
        },
        {
            "publisherName": "Elena Rodríguez",
            "publisherPhoto": "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
            "price": 4,
            "duration": 3,
            "hashtags": ["#BuenosAires", "#Food", "#Cuisine", "#Adventure"],
            "cityId": "6728c7e948470291eb954923" // Buenos Aires
        },
        {
            "publisherName": "Andrés Luna",
            "publisherPhoto": "https://images.unsplash.com/photo-1551844928-9d64b5f2b5a5?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
            "price": 5,
            "duration": 4,
            "hashtags": ["#NewYork", "#Skyline", "#Photography", "#CityLife"],
            "cityId": "6728c7e948470291eb95491e" // New York
        },
        {
            "publisherName": "Jessica Smith",
            "publisherPhoto": "https://images.unsplash.com/photo-1528716321684-40ba5d26e5d1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
            "price": 3,
            "duration": 3,
            "hashtags": ["#NewYork", "#Broadway", "#Shows", "#Entertainment"],
            "cityId": "6728c7e948470291eb95491e" // New York
        },
        {
            "publisherName": "Nico Müller",
            "publisherPhoto": "https://images.unsplash.com/photo-1512364209565-ccc9b9f9d74d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
            "price": 4,
            "duration": 2,
            "hashtags": ["#CapeTown", "#Mountains", "#Hiking", "#Nature"],
            "cityId": "6728c7e948470291eb954929" // Cape Town
        },
        {
            "publisherName": "Sarah Jacobs",
            "publisherPhoto": "https://images.unsplash.com/photo-1519904981062-7a7b40c6c039?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
            "price": 3,
            "duration": 5,
            "hashtags": ["#CapeTown", "#Beaches", "#Adventure", "#Sunsets"],
            "cityId": "6728c7e948470291eb954929" // Cape Town
        },
        {
            "publisherName": "Liam Brown",
            "publisherPhoto": "https://images.unsplash.com/photo-1547097461-0cf6ee1122a0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
            "price": 4,
            "duration": 4,
            "hashtags": ["#Sydney", "#OperaHouse", "#Landmarks", "#Tour"],
            "cityId": "6728c7e948470291eb954921" // Sydney
        },
        {
            "publisherName": "Emily Watson",
            "publisherPhoto": "https://images.unsplash.com/photo-1531572216498-ea4c0d4f63f8?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
            "price": 5,
            "duration": 3,
            "hashtags": ["#Sydney", "#Beaches", "#Surfing", "#Relax"],
            "cityId": "6728c7e948470291eb954921" // Sydney
        },
        {
            "publisherName": "Marco Romano",
            "publisherPhoto": "https://images.unsplash.com/photo-1536487769578-94beddc99efb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
            "price": 3,
            "duration": 5,
            "hashtags": ["#Rome", "#History", "#Colosseum", "#Ancient"],
            "cityId": "6728c7e948470291eb95492c" // Rome
        },
        {
            "publisherName": "Giulia Bianchi",
            "publisherPhoto": "https://images.unsplash.com/photo-1551807088-9f859b2629e3?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
            "price": 4,
            "duration": 4,
            "hashtags": ["#Rome", "#Vatican", "#Art", "#Religion"],
            "cityId": "6728c7e948470291eb95492c" // Rome
        },
        {
            "publisherName": "Ivan Petrov",
            "publisherPhoto": "https://images.unsplash.com/photo-1526937833319-6c70977eae5b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
            "price": 5,
            "duration": 3,
            "hashtags": ["#Moscow", "#RedSquare", "#Architecture", "#History"],
            "cityId": "6728c7e948470291eb954925" // Moscow
        },
        {
            "publisherName": "Anastasia Ivanova",
            "publisherPhoto": "https://images.unsplash.com/photo-1528716321684-40ba5d26e5d1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
            "price": 4,
            "duration": 4,
            "hashtags": ["#Moscow", "#Culture", "#Theatre", "#Museums"],
            "cityId": "6728c7e948470291eb954925" // Moscow
        },
        {
            "publisherName": "Ahmed Al-Farsi",
            "publisherPhoto": "https://images.unsplash.com/photo-1512344155963-8edb30ff02d7?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
            "price": 3,
            "duration": 3,
            "hashtags": ["#Dubai", "#Luxury", "#Shopping", "#Skyline"],
            "cityId": "6728c7e948470291eb95492a" // Dubai
        },
        {
            "publisherName": "Zahra Abdullah",
            "publisherPhoto": "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
            "price": 5,
            "duration": 2,
            "hashtags": ["#Dubai", "#Desert", "#Adventure", "#Safari"],
            "cityId": "6728c7e948470291eb95492a" // Dubai
        },
        {
            "publisherName": "Somchai Phong",
            "publisherPhoto": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
            "price": 4,
            "duration": 3,
            "hashtags": ["#Bangkok", "#Temples", "#Culture", "#Markets"],
            "cityId": "6728c7e948470291eb95492b" // Bangkok
        },
        {
            "publisherName": "Amina Chalerm",
            "publisherPhoto": "https://images.unsplash.com/photo-1549476464-37392f717541?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
            "price": 3,
            "duration": 5,
            "hashtags": ["#Bangkok", "#StreetFood", "#NightMarket", "#Vibrant"],
            "cityId": "6728c7e948470291eb95492b" // Bangkok
        }
    ];

    Itinerary.insertMany(itineraries)
        .then(() => {
            console.log('Itineraries inserted correctly');
            process.exit();
        })
        .catch(error => {
            console.error('Error when inserting itineraries:', error);
            process.exit(1);
        });
});

mongoose.connection.on("error", (error) => {
    console.error("Database connection error:", error);
    process.exit(1);
});