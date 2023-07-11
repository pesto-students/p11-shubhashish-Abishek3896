function getTemperatureForCity() {
  const cache = {};
  const temperatureData = {
    'New York': 20,
    London: 18,
    Paris: 22,
    Tokyo: 25,
    Sydney: 28,
  };
  return function (city) {
    if (cache[city]) {
      return `${cache[city]} (retrieved from cache)`;
    } else {
      const value = temperatureData[city];
      cache[city] = value;
      return value;
    }
  };
}

const temperature = getTemperatureForCity();
console.log(temperature('New York')); // 20
console.log(temperature('New York')); // 20 (retrieved from cache)
