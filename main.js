const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.API_KEY
const url = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=30082&days=1`
