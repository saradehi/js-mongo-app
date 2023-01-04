const axios = require('axios')
const Cards = require('../models/card')

const URL_API = 'https://api.thedogapi.com/v1/breeds?api_key=live_FJjTosz6kZ2dPtwlr84lPARhOXtwaS7gAosRPW19BKQZraL7Mc8o189FyVYbNW5t'

const getDogsApi = async() => {
    
    const dogs = await axios.get(URL_API)

    if(!dogs) {
        throw new Error("Can't find dogs")
    } else {
        const res = await dogs.data.map(ele => {
            return {
                _id: ele.id,
                name: ele.name,
                weight: ele.weight.metric,
                life_span: ele.life_span,
                image: ele.image.url
            }
        })

        return res
    }
}

const getDogsDb = async () => {
    const dogs = await Cards.find()
    return dogs;
}

const getAllDogs = async() => {
    const dogsApi = await getDogsApi()
    const dogsDb = await getDogsDb()

    return [...dogsApi, ...dogsDb]
}

module.exports = {
    getAllDogs
}