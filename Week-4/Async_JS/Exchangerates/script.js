async function getExchangeRate(currencyCode) {
  try {
    const response = await fetch(`https://api.exchangerate.host/latest`);
    const output = await response.json();
    const rates = output.rates;
    if (rates.hasOwnProperty(currencyCode)) {
      console.log(rates[currencyCode].toPrecision(5));
      return rates[currencyCode].toPrecision(5);
    } else {
      return null;
    }
    //return output.rates.currencyCode;
  } catch (e) {
    return 'Error while fetching';
  }
}
