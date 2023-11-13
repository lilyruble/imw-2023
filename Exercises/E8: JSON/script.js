// Youtube Tutorial from https://www.youtube.com/watch?v=ZD_Yft-Qd9Y&t=1204s&ab_channel=CodingArtist

let api = `https://v6.exchangerate-api.com/v6/${"99490b6c58fdedd0090ac659"}/latest/USD`;

const fromDropDown = document.getElementById("from-currency-select");
const toDropDown = document.getElementById("to-currency-select");

// Currency Array
currencies = [
    "USD",
    "AUD",
    "GBP",
    "EUR",
    "JPY",
    "CHF",
    "CAD",
    "CNY",
    "KWD",
    "VND",
    "THB",
    "NLG",
    "NZD",
    "MXN",
    "SGD",
    "ZAR",
    "KRW",
    "AED",
    "HKD",
    "DZD",
];

// Dropdown from the currencies array
currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    fromDropDown.add(option);
});

// Other Dropdown menu
currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.text = currency;
    toDropDown.add(option);
});

// Setting default values
fromDropDown.value = "CAD";
toDropDown.value = "USD";

let convertCurrency = () => {
    // Reference
    const amount = document.querySelector("#amount").value;
    const fromCurrency = fromDropDown.value;
    const toCurrency = toDropDown.value;


    // If amount input field is not empty

    if (amount.length != 0) {
        fetch(api)
            .then((resp) => resp.json())
            .then((data) => {
                let fromExchangeRate = data.conversion_rates[fromCurrency];
                let toExchangeRate = data.conversion_rates[toCurrency];
                const convertedAmount = (amount / fromExchangeRate) * toExchangeRate;
                result.innerHTML = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)}${toCurrency}`;
            })
    } else {
        alert("Please fill in the amount")
    };
};



// Convert Button Interaction
document
    .querySelector("#convert-button")
    .addEventListener("click", convertCurrency);
window.addEventListener("load", convertCurrency);