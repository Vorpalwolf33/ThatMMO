const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => res.json("Hello from server"));

module.exports = routes;