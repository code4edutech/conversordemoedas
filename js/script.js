const exchangeRates = {
  "BRL": {
      "USD": 0.19, // Exemplo: 1 BRL = 0.19 USD
  },
  "USD": {
      "BRL": 5.26, // Exemplo: 1 USD = 5.26 BRL
  }
};

function convertCurrency() {
  const currencyFrom = document.getElementById('currencyFrom').value;
  const currencyTo = document.getElementById('currencyTo').value;
  const amount = parseFloat(document.getElementById('amount').value);

  if (isNaN(amount) || amount <= 0) {
      alert("Por favor, insira um valor válido.");
      return;
  }

  const rate = exchangeRates[currencyFrom][currencyTo];
  const convertedAmount = amount * rate;

  document.getElementById('result').textContent = `${amount} ${currencyFrom} = ${convertedAmount.toFixed(2)} ${currencyTo}`;
}
