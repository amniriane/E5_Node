/*import { MongoClient } from "mongodb";

export const DB_NAME = 'ny';
export const DB_COLLECTION = 'restaurants';

// Déclaration de la connectionString
const CONNECTION_STRING = "mongodb://root:example@mongo:27017"; // Avec Docker
// const CONNECTION_STRING = 'mongodb://localhost:27017'; // Installation locale de MongoDB

// Initialise une connexion à la base MongoDB
export const client = new MongoClient(CONNECTION_STRING);
let db = null;

export function openDatabase() {
    return client.connect().then(() => {
        db = client.db(DB_NAME);

        return db;
    });
};


export async function getBoroughs() {
    const db = await client.db(DB_NAME);
    const restaurants = await db.collection(DB_COLLECTION);
    const boroughs = await restaurants.distinct("borough");

    return boroughs.slice(2);
}
*/
/*

const mongoose = require("mongoose");



const MongoURL = "mongodb://root:example@mongo:27017"; 

const connect = async() => {
    try {
        await mongoose.connect(MongoURL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
    } catch (error) {
        console.log({ message: 'Error when connecting to database', error });
    }
};

const disconnect = async() => {
    try {
        await mongoose.disconnect();
    } catch (error) {
        console.log({ message: 'Error when disconnect from database', error });
    }
};


export default { connect, disconnect };
*/

// Connexion persistente à la base MongoDB
import { MongoClient } from "mongodb";

export const DB_NAME = 'ny';
export const DB_COLLECTION = 'restaurant';

// Déclaration de la connectionString
const CONNECTION_STRING = "mongodb://root:example@localhost:27017"; // Avec Docker
// const CONNECTION_STRING = 'mongodb://localhost:27017'; // Installation locale de MongoDB

// Initialise une connexion à la base MongoDB
export const client = new MongoClient(CONNECTION_STRING);
let db = null;

export function openDatabase() {
    return client.connect().then(() => {
        db = client.db(DB_NAME);

        return db;
    });
};


export async function getAllRestaurants() {
    const db = await client.db(DB_NAME);
    const restaurants = await db.collection(DB_COLLECTION);
    let names = await restaurants.distinct("name");
    

    return names;
}
/*

export async function getAllRestaurantsByName() {
    const db = await client.db(DB_NAME);
    const restaurants = await db.collection(DB_COLLECTION);
    const names = await restaurants.find("");

    return names;
}
*/