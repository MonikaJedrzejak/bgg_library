const API_URL_COLLECTION = "https://bgg-json.azurewebsites.net/collection";
const API_URL_THING = "https://bgg-json.azurewebsites.net/thing";

export function getCollection(user) {
    fetch(`${API_URL_COLLECTION}/${user}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {return data});
}

export function getGameInfo(idGame) {
    fetch(`${API_URL_THING}/${idGame}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {return data});
}