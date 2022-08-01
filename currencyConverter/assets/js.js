const API_KEY = '4242932f95ecd8e06eba5fec';
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/`


async function getSupportedCodes() {
    try {
        const response = await fetch(`${BASE_URL}/codes`);
        if (response.ok) {
            const data = await response.json();
            const codes = data['supported_codes'];
            return codes;
        }

    } catch (err) {
        return []
    }
}

// getSupportedCodes().then((result) => {console.log(result)});

async function getConversionRate(baseCode, targetCode) {
    try {
        const response = await fetch(`${BASE_URL}/pair/${baseCode}/${targetCode}`);
        if (response.ok) {
            const data = await response.json();
            const rate = data["conversion_rate"];
            return rate;
        }
    } catch (err) { return 0 }
}

// getConversionRate("VND", "USD").then((result) => {console.log(result)});

const baseUnit = document.querySelector('#base-unit');
const targetRate = document.querySelector('#target-rate');

const inputBaseAmount = document.querySelector('#base-amount');
const selectBaseCode = document.querySelector('#base-code');
const inputTargetAmount = document.querySelector('#target-amount');
const selectTargetCode = document.querySelector('#target-code');

const errorMessage = document.querySelector('.error-message');

let supportedCodes = [];
let conversionRate = 0;

const updateExchangeRate = async () => {
    const baseCode = selectBaseCode.value;
    const targetCode = selectTargetCode.value;

    errorMessage.textContent = 'Loading...';
    conversionRate = await getConversionRate(baseCode, targetCode);
    if (conversionRate === 0) {
        errorMessage.textContent = 'Cannot get the conversion rate';
        return;
    }
    errorMessage.textContent = '';

    const baseName = supportedCodes.find(code => code[0] === baseCode)[1];
    const targetName = supportedCodes.find(code => code[0] === targetCode)[1];

    baseUnit.textContent = `1 ${baseName} equals`
    targetRate.textContent = `${conversionRate} ${targetName}`;
}

const initialize = async () => {
    // Get supported codes from the api 
    errorMessage.textContent = 'Loading...';
    supportedCodes = await getSupportedCodes();
    if (!supportedCodes.length) {
        errorMessage.textContent = 'No supported codes were found.';
        return;
    }
    errorMessage.textContent = '';

    //put options into the select boxs
    supportedCodes.forEach((codes) => {
        const baseOption = document.createElement('option');
        baseOption.value = codes[0];
        baseOption.textContent = codes[1];
        selectBaseCode.appendChild(baseOption);

        const targetOption = document.createElement('option');
        targetOption.value = codes[0];
        targetOption.textContent = codes[1];
        selectBaseCode.appendChild(targetOption);
    });

    //set VND to USD as default
    selectBaseCode.value = 'VND';
    selectTargetCode.value = 'USD';

    //Update exchange rate
    await updateExchangeRate(selectBaseCode, selectTargetCode);


}

selectBaseCode.addEventListener('change', updateExchangeRate);
selectTargetCode.addEventListener('change', updateExchangeRate);

inputBaseAmount.addEventListener('input', () => {
    inputTargetAmount.value = Math.round((inputBaseAmount.value * conversionRate) * 10 **6)/ (10**6);
    
});
inputTargetAmount.addEventListener('input', () => {
    inputBaseAmount.value = Math.round((inputTargetAmount.value / conversionRate) * 10 **6)/ (10**6);
});

initialize();