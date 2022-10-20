const mongoose = require('mongoose');

const restautantSchema = new mongoose.Schema({
    restaurant_id: {
        type: String,
        required: true
    },
    cuisine: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    borough: {
        type: String,
        required: true
    },

    address: {
        building: {
            type: String
        },
        street: {
            type: String
        },
        zipcode: {
            type: String
        },
        coord: {
            0: {
                type: Number
            },
            1: {
                type: Number
            }
        }
    },
    

})

/*
grades[]
*/


const Restaurant = mongoose.model('restaurant', restautantSchema);

module.exports = Restaurant;