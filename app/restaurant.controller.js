const express = require('express');
const Restaurant = require('../models/restaurants.model');
const mongoose = require('mongoose');



export async function getAllRestaurants() {
    const db = await client.db(DB_NAME);
    const restaurants = await db.collection(DB_COLLECTION);
    const restaurant_name = await restaurants.find("name");

    return restaurant_name;
}



class RestaurantController {
    static getAllRestaurants = async(req, res) => {
        try {
            const restaurant = req.restaurant;
            const allRestaurant = await Restaurant.find();
            res.status(200).send({ error: false, message: 'Get all Restaurant', restaurant: allRestaurant });
        } catch (error) {
            res.status(400).send({ error: true, message: error.message, err: error });
        }
    }
    static getRestaurantByBorough = async(req, res) => {
        try {
            const restaurant = req.restaurant;

            const allRestaurant = await Restaurant.find({ restaurants: restaurant.borough});

            res.status(200).send({ error: false, message: 'You find all restaurant of one borough', restaurant: allRestaurant });
        } catch (error) {
            res.status(400).send({ error: true, message: error.message, err: error });
        }
    }
    static getRestaurantByCuisine = async(req, res) => {
        try {
            const restaurant = req.restaurant;

            const allRestaurant = await Restaurant.find({ restaurants: restaurant.cuisine});

            res.status(200).send({ error: false, message: 'You find all restaurant of one cuisine', restaurant: allRestaurant });
        } catch (error) {
            res.status(400).send({ error: true, message: error.message, err: error });
        }
    }
    static getRestaurantByName = async(req, res) => {
        try {
            const restaurant = req.restaurant;

            const allRestaurant = await Restaurant.find({ restaurants: restaurant.name});

            res.status(200).send({ error: false, message: 'You find all restaurant of one name', restaurant: allRestaurant });
        } catch (error) {
            res.status(400).send({ error: true, message: error.message, err: error });
        }
    }

}

export default RestaurantController;