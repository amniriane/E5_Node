import express from 'express';

const router = new express.Router();

import { getAllRestaurants } from './database.js';

//import RestaurantController from './controller/restaurant.controller';

/**
 * Déclaration des routes de l'app
 */

router.get("/", getHome);


//router.get("/restaurants", )



/**
 * Déclaration des controlleurs de l'app
 */

/**
 * GET /
 * Page d'accueil
 */
async function getHome(req, res) {
  const names = await getAllRestaurants() ;
  res.render('index', { names });
}

/*
async function getOneRestaurant(req, res) {
  const names = await getAllRestaurantsByName() ;
  res.render('index', { names,  });
}
*/

/*
async function getRestaurantName(req, res) {
  const searchRestaurant = await getRestaurantByName() ;
  res.render('form', { searchRestaurant });

}
*/


// Exporte le routeur pour le fichier principal

export default router;








/*
const express = require('express');
const AdmxController = require('../controllers/admx.controller');
const admxMiddleware = require('../middlewares/admx.middleware');
const categoryMiddleware = require('../middlewares/category.middleware');
const policyiddleware = require('../middlewares/policy.middleware');

const routerIndex = express();

routerIndex.get('/categories', AdmxController.getAllCategory);
routerIndex.get('/admxes', AdmxController.getAllAdmx);
routerIndex.get('/policies', AdmxController.getAllPolicy);
routerIndex.get('/policiesitems', AdmxController.getAllItem);
routerIndex.post('/admx', AdmxController.newAdmx);
routerIndex.post('/category', AdmxController.getAllCategory);
routerIndex.post('/policy', AdmxController.newPolicy);
routerIndex.post('/item', AdmxController.newItem);
routerIndex.get('/admxes/categories', admxMiddleware, AdmxController.getCategoryByOneAdmx);
routerIndex.get('categories/policies', categoryMiddleware, AdmxController.getPolicyByOneCategoy);
routerIndex.get('policies/policiesitems', categoryMiddleware, AdmxController.getItemByOnePolicy);
*/