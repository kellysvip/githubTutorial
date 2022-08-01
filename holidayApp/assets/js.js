const API_KEY = '2d09ae17-a936-4be4-8adc-d8476617e1f6'

const countriesBtn = document.querySelector('#countries-list-btn')
const languageBtn = document.querySelector('#languages-list-btn')
const holidayBtn = document.querySelector('#holidays-btn')



const getCountries = async () => {
    try {
        const url = `https://holidayapi.com/v1/countries?pretty&key=${API_KEY}`
        //here is how we add a dynamic value (API KEY) to the url
        const res = await fetch(url)
        const data = await res.json()
        console.log("data", data) //have a look the retrieved data
        return data
    } catch (err) {
        console.log("err", err)
    }
}

const getLanguages = async () => {
    try {
        const url = `https://holidayapi.com/v1/languages?pretty&key=${API_KEY}`
        //here is how we add a dynamic value (API KEY) to the url
        const res = await fetch(url)
        const languages = await res.json()
        console.log("lang", languages) //have a look the retrieved data
        return languages
    } catch (err) {
        console.log("err", err)
    }
}

const getHolidays = async () => {
    try {
            let url = `https://holidayapi.com/v1/holidays?pretty&key=${API_KEY}&country=${document.getElementById('country-query').value}&year=2021&language=${document.querySelector('#language-query').value}&search=${document.querySelector('#search-query').value}
        `
        

        //here is how we add a dynamic value (API KEY) to the url
        const res = await fetch(url)
        const holiday = await res.json()
        console.log("holiday", holiday) //have a look the retrieved data
        return holiday
    } catch (err) {
        console.log("err", err)
    }
}


const renderCountries = async () => {
    try {
        //1. Fetch all the countries by using function 
        const data = await getCountries()

        //2. Find the element with the id 
        const countriesList = document.getElementById("countries-list")

        //3. Take out the `ul` element
        const ulCountriesList = countriesList.children[2]

        //4. Delete the sample inside `ul` element
        ulCountriesList.innerHTML = ""

        //5. Loop through the list of countries
        data.countries.forEach((country, index) => {
            //Create new `li` for each element
            const x = document.createElement("li")
            x.innerHTML = `<div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
                <div class="li-title">${country.name}</div>
                <div>Code: ${country.code}</div>
            </div>`;

            //Then append them to the `ul` element
            ulCountriesList.appendChild(x)
        })
    } catch (err) {
        console.log("err", err)
    }
}

const renderLanguages = async () => {
    try {
        //1. Fetch all the countries by using function 
        const data = await getLanguages()

        //2. Find the element with the id 
        const languagesList = document.getElementById("languages-list")

        //3. Take out the `ul` element
        const ulLanguagesList = languagesList.children[2]

        //4. Delete the sample inside `ul` element
        ulLanguagesList.innerHTML = ""

        //5. Loop through the list of countries

        data.languages.forEach((language, index) => {
            //Create new `li` for each element
            const x = document.createElement("li")
            x.innerHTML = `<div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
                <div class="li-title">${language.name}</div>
                <div class="li-text">Code: ${language.code}</div>
            </div>`;

            //Then append them to the `ul` element
            ulLanguagesList.appendChild(x)
        }
        )
    } catch (err) {
        console.log("err", err)
    }

}

const renderHolidays = async () => {
    try {
        //1. Fetch all the countries by using function 
        const data = await getHolidays()


        //2. Find the element with the id 
        const holidaysList = document.getElementById("holidays-list")

        //3. Take out the `ul` element
        const ulHolidaysList = holidaysList.children[1]
        const ulHolidaysName = holidaysList.children[0]


        //4. Delete the sample inside `ul` element
        ulHolidaysList.innerHTML = ""

        //5. Loop through the list of countries
        data.holidays.forEach((holiday, index) => {
            ulHolidaysName.innerHTML = `Holidays of ${holiday.country}`

            const x = document.createElement("li")
            x.innerHTML = `<div class="bullet">${index + 1}</div>
            <div class="li-wrapper">
                <div class="li-title">${holiday.name}</div>
                <div class="li-text">${holiday.weekday.date.name} - ${holiday.date}</div>
            </div>`;

            //Then append them to the `ul` element
            ulHolidaysList.appendChild(x)
        })
    } catch (err) {
        console.log("err", err)
    }

}


holidayBtn.addEventListener('click', () => {
    renderHolidays()
})
countriesBtn.addEventListener('click', () => {
    renderCountries()
})

languageBtn.addEventListener('click', () => {
    renderLanguages()
})