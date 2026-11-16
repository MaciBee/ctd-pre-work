# Weather & Cloud Cover API App

A weather web app built for Code the Dream 2027 Pre-work.  
Type in a city to see its current temperature or cloud coverage.

Features

Search for any city by name
See Weather: shows the current temperature in both Celsius and Fahrenheit.
A seperate page to see Cloud: shows the current cloud coverage.
A way to go back and forth from each site. 
Each button handles its own error, checking and displays various messages depending on the error status instead of crashing silently.

How it works

The app uses two Open-Meteo APIs. No API key needed      

Using Geocoding API, it turns the city name into latitude and longitude.
Forecast API uses lon. and lat. to get temperature_2m and cloud_cover.
The temperature is returned as Celsius, using basic math, convert to Fahrenheit and both are displayed. 

Project files

index.html - Main page
styles.css - Page styling 
script.js - fetch data from API and displays it on page

"How to run it:


1. Clone the repository:
   ```bash
   git clone https://github.com/MaciBee/ctd-pre-work.git
   ```
2. Go into the project folder:
   ```bash
   cd ctd-pre-work
   ```
3. Start a local web server (requires Python 3):
   ```bash
   python3 -m http.server 8000
   ```
4. Open your browser and go to http://localhost:8000
5. Type a city name and click **See Weather** or **See Cloud**.

"


Future improvements:
Cloud coverage does not reliably display. After splitting index.html to have seperate page, it caused conflicts
Clean up async function getCloud() 
Create one function instead of repeating code. 
Improve CSS and styling for better experience.
