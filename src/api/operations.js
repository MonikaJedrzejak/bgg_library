const API_URL_COLLECTION = "https://bgg-json.azurewebsites.net/collection";
const API_URL_THING = "https://bgg-json.azurewebsites.net/thing";

export function getCollection(user,cb) {
    fetch(`${API_URL_COLLECTION}/${user}`)
        .then(res =>
            res.json())
        .then(data => {
            cb(data)
        })
}

export function getGameInfo(idGame,cb) {
    fetch(`${API_URL_THING}/${idGame}`)
    .then(res =>
        res.json())
    .then(data => {
        cb(data)
    })
}