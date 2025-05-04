// Express setup
const express = require("express");
const app = express();
const port = 2000;
const bodyParser = require("body-parser");
const axios = require("axios");
const ejs = require("ejs");

// Load environment variables
require("dotenv").config();
const api_key = process.env.api_key;

app.set("view engine", "ejs");
app.use(express.static(__dirname));

// API Route to get weather data

app.get("/", async(req,res) =>{
    try {
        const city = req.query.city;
        
        if (!city) {
            return res.render("index", { weather: null });
        }

        const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${encodeURIComponent(city)}`;
        const response = await axios.get(url);
        const data = response.data;


        const weatherInfo = {
            city: data.location.name,
            temperature: data.current.temp_c,
            condition: data.current.condition.text,
        };

        console.log(weatherInfo); // Debugging
        if (data.error && data.error.code === 1006) {
            return res.render("index", { weather: { error: "City not found. Please enter a valid city." } });
        }

        res.render("index", { weather: weatherInfo });

    } catch (error) {
        console.error("Error fetching weather data:", error.response?.data || error.message);
        res.render("index", { weather: null });
    }
})

// Start the server
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
