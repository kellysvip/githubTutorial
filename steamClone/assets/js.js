

var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

const getAllGames = async () => {
    try {
        const url = `https://cs-steam-game-api.herokuapp.com/games`
        //here is how we add a dynamic value (API KEY) to the url
        const res = await fetch(url)
        const data = await res.json()
        console.log("data", data) //have a look the retrieved data
        return data
    } catch (error) {
        console.log('error', error)
    }

    // fetch("https://cs-steam-game-api.herokuapp.com/games", requestOptions )
    // .then(response => response.text())
    // .then(result => console.log(result))
    // .catch(error => console.log('error', error));
}
getAllGames()
const renderGames = async () => {
    try {
        const data = await getAllGames()
        const gamesList = document.getElementById("content")
        const ulGamesList = gamesList.children[0]
        ulGamesList.innerHTML = ""
        let temp = 0;

        data.data.forEach((game) => {
            temp++
            const x = document.createElement("div")
            x.innerHTML = `
            <div class="content-row">
            <div class="game-wrraper">
            <div class="cover">
                <img src="${game.header_image}"
                    alt="">
                <div class="game-info">
                    <p>${game.name}</p>
                    <p>${game.price}$</p>
                </div>
            </div>
        </div>
            </div>
            `;

            if (temp <= 4) {
                ulGamesList.appendChild(x)
            }
        })
    } catch (err) {
        console.log("err", err)
    }
}

const renderGames2 = async () => {
    try {
        const data = await getAllGames()
        const gamesList = document.getElementById("content")
        const ulGamesList = gamesList.children[1]
        ulGamesList.innerHTML = ""
        let temp = 0;

        data.data.forEach((game) => {
            temp++
            const x = document.createElement("div")
            x.innerHTML = `
            <div class="content-row">
            <div class="game-wrraper">
            <div class="cover">
                <img src="${game.header_image}"
                    alt="">
                <div class="game-info">
                    <p>${game.name}</p>
                    <p>${game.price}$</p>
                </div>
            </div>
        </div>
            </div>`;

            if (temp <= 8 && temp > 4) {
                ulGamesList.appendChild(x)
            }
        })
    } catch (err) {
        console.log("err", err)
    }
}

const renderGames3 = async () => {
    try {
        const data = await getAllGames()
        const gamesList = document.getElementById("content")
        const ulGamesList = gamesList.children[2]
        ulGamesList.innerHTML = ""
        let temp = 0;

        data.data.forEach((game) => {
            temp++
            const x = document.createElement("div")
            x.innerHTML = `
            <div class="content-row">
            <div class="game-wrraper">
            <div class="cover">
                <img src="${game.header_image}"
                    alt="">
                <div class="game-info">
                    <p>${game.name}</p>
                    <p>${game.price}$</p>
                </div>
            </div>
        </div>
            </div>`;

            if (temp <= 15 && temp > 8) {
                ulGamesList.appendChild(x)
            }
        })
    } catch (err) {
        console.log("err", err)
    }
}
renderGames2()
renderGames3()
renderGames()
