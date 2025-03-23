# Weather App 🌤

A simple weather application built with **Node.js, Express, and EJS**, using the **WeatherAPI** to fetch real-time weather data.

## Features 🚀

- Get real-time weather updates by entering a city name.
- Displays **temperature** and **weather conditions**.
- Responsive and modern UI built with HTML, CSS, and EJS.
- Error handling for invalid city names.
- Uses **Express.js**, **Axios**, and **WeatherAPI**.

## Technologies Used 📦

- **Node.js** with Express.js for the backend.
- **EJS** for templating.
- **Axios** for making API requests.
- **WeatherAPI** for fetching weather data.
- **CSS** for styling.

## Installation 🛠

1. Clone this repository:
   ```bash
   git clone https://github.com/PR-BHANU/Weather-app.git

2. Navigate to the project folder:
   ```bash
   cd Weather-app
3. Install Packages:
   ```bash
   npm install
4. Create a .env file in the root directory and add your WeatherAPI key:
   ```bash
   api_key=your_weatherapi_key
5. Start the server:
   ```bash
   node index.js

6. Open http://localhost:2000 in you browser.


## Error Handling ❌

- If an **invalid city** is entered, the app will display:  
  `"Please enter a proper city to get weather details."`
- If the API returns an error (like city not found, error code `1006`), the app will handle it gracefully and inform the user.
- If there are network issues or API failures, a general error message will be displayed.

## About the Developer 👨‍💻

This project was created by **Bhanu**.  

Feel free to **fork this project,**

