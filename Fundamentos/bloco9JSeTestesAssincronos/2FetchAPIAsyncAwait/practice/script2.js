const cryptoList = document.getElementById('crypto-currencies');

const fetchCrypto = async () => {
    const API_URL = `https://api.coincap.io/v2/assets`;
    const crypto = await fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((error) => error.toString());

return crypto;
}

const fetchUsdCurrencies = async () => {
    const baseUrl = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest'
    const usdEndpoint = '/currencies/usd.min.json'
    const url = baseUrl.concat(usdEndpoint);
  
    const usdCurrencies = await fetch(url)
      .then((response) => response.json())
      .then((data) => data.usd)
      .catch((error) => error.toString());
  
    return usdCurrencies;
  };

const listCurrencies = async () => {
    const currencies = await fetchCrypto();

    const worldCurrencies = await fetchUsdCurrencies();
    
    currencies.filter((currency) => Number(currency.rank) <= 10)
    .forEach(currency => {
        const newCurrency = document.createElement('li');
        newCurrency.style.margin = "20px"
        newCurrency.innerHTML = `${currency.name} (${currency.symbol}: ${(Number(currency.priceUsd)*Number(worldCurrencies.brl)).toFixed(2)}) BRL`
        cryptoList.appendChild(newCurrency);
    });
}
window.onload = () => listCurrencies();
