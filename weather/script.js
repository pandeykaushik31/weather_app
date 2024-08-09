window.onload = () => {
  // Common settings for the APIs
  const settings1 = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "94dc5300e1msh41cc5b5209ab149p196057jsn418970d607f4",
      "x-rapidapi-host": "weather-data-api1.p.rapidapi.com",
    },
  };

  const settings2 = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "94dc5300e1msh41cc5b5209ab149p196057jsn418970d607f4",
      "x-rapidapi-host": "open-weather13.p.rapidapi.com",
    },
  };

  const settings3 = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "94dc5300e1msh41cc5b5209ab149p196057jsn418970d607f4",
      "x-rapidapi-host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  // Function to get weather data for a specific city
  const getWeather = (city) => {
    cityName.innerHTML = city;

    // URL for each API
    const url1 = `https://weather-data-api1.p.rapidapi.com/find-location?q=${encodeURIComponent(
      city
    )}&limit=5`;
    const url2 = `https://open-weather13.p.rapidapi.com/city/${encodeURIComponent(
      city
    )}/EN`;
    const url3 = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${encodeURIComponent(
      city
    )}`;

    // Fetch from the first API
    fetch(url1, settings1)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data from weather-data-api1:", data);
        if (data.locations && data.locations.length > 0) {
          const location = data.locations[0]; // Example: take the first location

          // Update the UI with data from the first API
          cloud_pct.innerHTML = location.weather.cloudPercentage; // Adjust according to actual field
          feels_like.innerHTML = location.weather.feelsLike; // Adjust according to actual field
          humidity.innerHTML = location.weather.humidity; // Adjust according to actual field
          max_temp.innerHTML = location.weather.maxTemp; // Adjust according to actual field
          min_temp.innerHTML = location.weather.minTemp; // Adjust according to actual field
          sunrise.innerHTML = new Date(
            location.weather.sunrise * 1000
          ).toLocaleTimeString(); // Adjust according to actual field
          sunset.innerHTML = new Date(
            location.weather.sunset * 1000
          ).toLocaleTimeString(); // Adjust according to actual field
          temp.innerHTML = location.weather.temp; // Adjust according to actual field
          wind_degrees.innerHTML = location.weather.windDegrees; // Adjust according to actual field
          wind_speed.innerHTML = location.weather.windSpeed; // Adjust according to actual field
        } else {
          alert("No weather data found for this city from the first API.");
        }
      })
      .catch((err) => {
        console.error(
          "Error fetching weather data from weather-data-api1:",
          err
        );
        alert(
          "Failed to fetch weather data from the first API. Please try again later."
        );
      });

    // Fetch from the second API
    fetch(url2, settings2)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data from open-weather13:", data);
        // Assuming the response includes weather data in the same format
        // Adjust the data extraction based on the actual response format
        cloud_pct.innerHTML = data.weather.clouds; // Adjust according to actual field
        feels_like.innerHTML = data.weather.feels_like; // Adjust according to actual field
        humidity.innerHTML = data.weather.humidity; // Adjust according to actual field
        max_temp.innerHTML = data.weather.temp_max; // Adjust according to actual field
        min_temp.innerHTML = data.weather.temp_min; // Adjust according to actual field
        sunrise.innerHTML = new Date(
          data.weather.sunrise * 1000
        ).toLocaleTimeString(); // Adjust according to actual field
        sunset.innerHTML = new Date(
          data.weather.sunset * 1000
        ).toLocaleTimeString(); // Adjust according to actual field
        temp.innerHTML = data.weather.temp; // Adjust according to actual field
        wind_degrees.innerHTML = data.weather.wind_degrees; // Adjust according to actual field
        wind_speed.innerHTML = data.weather.wind_speed; // Adjust according to actual field
      })
      .catch((err) => {
        console.error("Error fetching weather data from open-weather13:", err);
        alert(
          "Failed to fetch weather data from the second API. Please try again later."
        );
      });

    // Fetch from the third API
    fetch(url3, settings3)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data from weather-by-api-ninjas:", data);
        // Assuming the response includes weather data in the same format
        // Adjust the data extraction based on the actual response format
        cloud_pct.innerHTML = data.cloud_pct; // Adjust according to actual field
        feels_like.innerHTML = data.feels_like; // Adjust according to actual field
        humidity.innerHTML = data.humidity; // Adjust according to actual field
        max_temp.innerHTML = data.max_temp; // Adjust according to actual field
        min_temp.innerHTML = data.min_temp; // Adjust according to actual field
        sunrise.innerHTML = new Date(data.sunrise * 1000).toLocaleTimeString(); // Adjust according to actual field
        sunset.innerHTML = new Date(data.sunset * 1000).toLocaleTimeString(); // Adjust according to actual field
        temp.innerHTML = data.temp; // Adjust according to actual field
        wind_degrees.innerHTML = data.wind_degrees; // Adjust according to actual field
        wind_speed.innerHTML = data.wind_speed; // Adjust according to actual field
      })
      .catch((err) => {
        console.error(
          "Error fetching weather data from weather-by-api-ninjas:",
          err
        );
        alert(
          "Failed to fetch weather data from the third API. Please try again later."
        );
      });
  };

  const submit = document.getElementById("submit");
  const city = document.getElementById("city");
  const cityName = document.getElementById("cityName");
  const cloud_pct = document.getElementById("cloud_pct");
  const feels_like = document.getElementById("feels_like");
  const humidity = document.getElementById("humidity");
  const max_temp = document.getElementById("max_temp");
  const min_temp = document.getElementById("min_temp");
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");
  const temp = document.getElementById("temp");
  const wind_degrees = document.getElementById("wind_degrees");
  const wind_speed = document.getElementById("wind_speed");

  if (submit) {
    submit.addEventListener("click", (e) => {
      e.preventDefault();
      getWeather(city.value);
    });
  }

  // Add event listeners to the dropdown items
  const delhi = document.getElementById("delhi");
  const mumbai = document.getElementById("mumbai");
  const kolkata = document.getElementById("kolkata");
  const uttar_pradesh = document.getElementById("uttar_pradesh");
  const other = document.getElementById("other");

  if (delhi && mumbai && kolkata && uttar_pradesh && other) {
    delhi.addEventListener("click", () => getWeather("Delhi"));
    mumbai.addEventListener("click", () => getWeather("Mumbai"));
    kolkata.addEventListener("click", () => getWeather("Kolkata"));
    uttar_pradesh.addEventListener("click", () => getWeather("Uttar Pradesh"));
    other.addEventListener("click", () => alert("Please enter a city name"));
  }

  // Update weather information for common places on page load
  const commonPlaces = [
    "Maharashtra",
    "Uttar Pradesh",
    "Delhi",
    "West Bengal",
    "Bihar",
  ];

  const updateCommonPlacesWeather = () => {
    commonPlaces.forEach((place) => {
      const url1 = `https://weather-data-api1.p.rapidapi.com/find-location?q=${encodeURIComponent(
        place
      )}&limit=5`;
      const url2 = `https://open-weather13.p.rapidapi.com/city/${encodeURIComponent(
        place
      )}/EN`;
      const url3 = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${encodeURIComponent(
        place
      )}`;

      fetch(url1, settings1)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(
            `Weather data for ${place} from weather-data-api1:`,
            data
          );
          if (data.locations && data.locations.length > 0) {
            const location = data.locations[0];

            // Update the UI with data from the first API
            const placeId = place.toLowerCase().replace(/\s/g, "_");
            const tempElement = document.querySelector(`#${placeId} .temp`);
            if (tempElement) {
              tempElement.innerHTML = location.weather.temp; // Adjust according to actual field
            }

            const maxTempElement = document.querySelector(
              `#${placeId} .max_temp`
            );
            if (maxTempElement) {
              maxTempElement.innerHTML = location.weather.maxTemp; // Adjust according to actual field
            }

            const minTempElement = document.querySelector(
              `#${placeId} .min_temp`
            );
            if (minTempElement) {
              minTempElement.innerHTML = location.weather.minTemp; // Adjust according to actual field
            }

            const cloudPctElement = document.querySelector(
              `#${placeId} .cloud_pct`
            );
            if (cloudPctElement) {
              cloudPctElement.innerHTML = location.weather.cloudPercentage; // Adjust according to actual field
            }

            const feelsLikeElement = document.querySelector(
              `#${placeId} .feels_like`
            );
            if (feelsLikeElement) {
              feelsLikeElement.innerHTML = location.weather.feelsLike; // Adjust according to actual field
            }

            const humidityElement = document.querySelector(
              `#${placeId} .humidity`
            );
            if (humidityElement) {
              humidityElement.innerHTML = location.weather.humidity; // Adjust according to actual field
            }

            const windSpeedElement = document.querySelector(
              `#${placeId} .wind_speed`
            );
            if (windSpeedElement) {
              windSpeedElement.innerHTML = location.weather.windSpeed; // Adjust according to actual field
            }

            const windDegreesElement = document.querySelector(
              `#${placeId} .wind_degrees`
            );
            if (windDegreesElement) {
              windDegreesElement.innerHTML = location.weather.windDegrees; // Adjust according to actual field
            }

            const sunsetElement = document.querySelector(`#${placeId} .sunset`);
            if (sunsetElement) {
              sunsetElement.innerHTML = new Date(
                location.weather.sunset * 1000
              ).toLocaleTimeString(); // Example conversion
            }

            const sunriseElement = document.querySelector(
              `#${placeId} .sunrise`
            );
            if (sunriseElement) {
              sunriseElement.innerHTML = new Date(
                location.weather.sunrise * 1000
              ).toLocaleTimeString(); // Example conversion
            }
          }
        })
        .catch((err) =>
          console.error(
            `Error fetching weather data for ${place} from weather-data-api1:`,
            err
          )
        );

      // Fetch from the second API
      fetch(url2, settings2)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(`Weather data for ${place} from open-weather13:`, data);
          const placeId = place.toLowerCase().replace(/\s/g, "_");
          const tempElement = document.querySelector(`#${placeId} .temp`);
          if (tempElement) {
            tempElement.innerHTML = data.weather.temp; // Adjust according to actual field
          }

          const maxTempElement = document.querySelector(
            `#${placeId} .max_temp`
          );
          if (maxTempElement) {
            maxTempElement.innerHTML = data.weather.temp_max; // Adjust according to actual field
          }

          const minTempElement = document.querySelector(
            `#${placeId} .min_temp`
          );
          if (minTempElement) {
            minTempElement.innerHTML = data.weather.temp_min; // Adjust according to actual field
          }

          const cloudPctElement = document.querySelector(
            `#${placeId} .cloud_pct`
          );
          if (cloudPctElement) {
            cloudPctElement.innerHTML = data.weather.clouds; // Adjust according to actual field
          }

          const feelsLikeElement = document.querySelector(
            `#${placeId} .feels_like`
          );
          if (feelsLikeElement) {
            feelsLikeElement.innerHTML = data.weather.feels_like; // Adjust according to actual field
          }

          const humidityElement = document.querySelector(
            `#${placeId} .humidity`
          );
          if (humidityElement) {
            humidityElement.innerHTML = data.weather.humidity; // Adjust according to actual field
          }

          const windSpeedElement = document.querySelector(
            `#${placeId} .wind_speed`
          );
          if (windSpeedElement) {
            windSpeedElement.innerHTML = data.weather.wind_speed; // Adjust according to actual field
          }

          const windDegreesElement = document.querySelector(
            `#${placeId} .wind_degrees`
          );
          if (windDegreesElement) {
            windDegreesElement.innerHTML = data.weather.wind_degrees; // Adjust according to actual field
          }

          const sunsetElement = document.querySelector(`#${placeId} .sunset`);
          if (sunsetElement) {
            sunsetElement.innerHTML = new Date(
              data.weather.sunset * 1000
            ).toLocaleTimeString(); // Example conversion
          }

          const sunriseElement = document.querySelector(`#${placeId} .sunrise`);
          if (sunriseElement) {
            sunriseElement.innerHTML = new Date(
              data.weather.sunrise * 1000
            ).toLocaleTimeString(); // Example conversion
          }
        })
        .catch((err) =>
          console.error(
            `Error fetching weather data for ${place} from open-weather13:`,
            err
          )
        );

      // Fetch from the third API
      fetch(url3, settings3)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => {
          console.log(
            `Weather data for ${place} from weather-by-api-ninjas:`,
            data
          );
          const placeId = place.toLowerCase().replace(/\s/g, "_");
          const tempElement = document.querySelector(`#${placeId} .temp`);
          if (tempElement) {
            tempElement.innerHTML = data.temp; // Adjust according to actual field
          }

          const maxTempElement = document.querySelector(
            `#${placeId} .max_temp`
          );
          if (maxTempElement) {
            maxTempElement.innerHTML = data.max_temp; // Adjust according to actual field
          }

          const minTempElement = document.querySelector(
            `#${placeId} .min_temp`
          );
          if (minTempElement) {
            minTempElement.innerHTML = data.min_temp; // Adjust according to actual field
          }

          const cloudPctElement = document.querySelector(
            `#${placeId} .cloud_pct`
          );
          if (cloudPctElement) {
            cloudPctElement.innerHTML = data.cloud_pct; // Adjust according to actual field
          }

          const feelsLikeElement = document.querySelector(
            `#${placeId} .feels_like`
          );
          if (feelsLikeElement) {
            feelsLikeElement.innerHTML = data.feels_like; // Adjust according to actual field
          }

          const humidityElement = document.querySelector(
            `#${placeId} .humidity`
          );
          if (humidityElement) {
            humidityElement.innerHTML = data.humidity; // Adjust according to actual field
          }

          const windSpeedElement = document.querySelector(
            `#${placeId} .wind_speed`
          );
          if (windSpeedElement) {
            windSpeedElement.innerHTML = data.wind_speed; // Adjust according to actual field
          }

          const windDegreesElement = document.querySelector(
            `#${placeId} .wind_degrees`
          );
          if (windDegreesElement) {
            windDegreesElement.innerHTML = data.wind_degrees; // Adjust according to actual field
          }

          const sunsetElement = document.querySelector(`#${placeId} .sunset`);
          if (sunsetElement) {
            sunsetElement.innerHTML = new Date(
              data.sunset * 1000
            ).toLocaleTimeString(); // Example conversion
          }

          const sunriseElement = document.querySelector(`#${placeId} .sunrise`);
          if (sunriseElement) {
            sunriseElement.innerHTML = new Date(
              data.sunrise * 1000
            ).toLocaleTimeString(); // Example conversion
          }
        })
        .catch((err) =>
          console.error(
            `Error fetching weather data for ${place} from weather-by-api-ninjas:`,
            err
          )
        );
    });
  };

  // Call the function on page load
  updateCommonPlacesWeather();
};
