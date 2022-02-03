export const getWeather = () => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Nashville&appid=9f216fcc9206f98d20b2f1d761fb9674&units=imperial`
    )
      .then((response) => response.json())
  };