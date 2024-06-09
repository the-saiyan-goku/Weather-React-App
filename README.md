# Weather React App

A weather application built with React that uses the OpenWeatherAPI to fetch weather data. The app includes features such as toggling between dark and light mode and using `navigator.geolocation` to get the current location.

## Features

- Fetches weather data using the OpenWeatherAPI.
- Allows users to search weather information by city name or postal code.
- Toggle button to switch between dark mode and light mode.
- Uses browser geolocation to get and display weather for the current location.

## Technologies Used

- React
- OpenWeatherAPI
- CSS for styling
- Geolocation API

## Installation

1. Clone the repository:
   
    git clone https://github.com/the-saiyan-goku/weather-react-app.git
   

2. Navigate to the project directory:
    
    cd weather-react-app
   

3. Install the dependencies:
   
    npm install
    

4. Create a `.env` file in the root directory and add your OpenWeatherAPI key:
    ```sh
    REACT_APP_OPENWEATHER_KEY=your_openweather_api_key
    ```

## Usage

1. Start the application:
   
    npm start
   

2. Open your browser and go to `http://localhost:3000`.

3. Use the search bar to enter a city name or postal code to get the weather data.

4. Click the toggle button to switch between dark mode and light mode.

## Code Overview

### Components

- `App.js`: Main component that renders the `CurrentLocation` component and the footer.
- `CurrentLocation.js`: Uses `navigator.geolocation` to get the user's current location and fetch weather data.
- `Forecast.js`: Fetches and displays weather data based on the input (city name or postal code).

### Dark Mode Implementation

Dark mode is implemented using React's state management. A toggle button switches the state between dark and light modes, which applies different CSS classes accordingly.

### Geolocation

The `CurrentLocation` component uses `navigator.geolocation` to get the user's current location. It then fetches the weather data for that location using the OpenWeatherAPI.

### OpenWeatherAPI Integration

Weather data is fetched from the OpenWeatherAPI. Ensure you have signed up on the [OpenWeatherAPI](https://openweathermap.org/api) website to get your API key.

### Sample Code Snippets

#### App.js

```jsx
import React  from "react";
import CurrentLocation from "./currentLocation";
import "./App.css";
import DarkMode from "./Components/DarkMode";

function App() {
  return (
    
      <div className="container">
        <CurrentLocation />
        <DarkMode/>
      </div>
     
    
  );
}

export default App;
