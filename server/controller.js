let movies = [
    {
        "id": 1,
        "title": "Mending",
        "spellLvl": 0
    },
    
    {
        "id": 2,
        "title": "Message",
        "spellLvl": 0
    },
        
    {
        "id": 3,
        "title": "Dancing Lights",
        "spellLvl": 0
    },  
        
    {
        "id": 4,
        "title": "Dissonant Whispers",
        "spellLvl": 1
    },  
        
    {
        "id": 5,
        "title": "Feather Fall",
        "spellLvl": 1
    },  
        
    {
        "id": 6,
        "title": "Healing Word",
        "spellLvl": 1
    },  
        
    {
        "id": 7,
        "title": "Thunderwave",
        "spellLvl": 1
    },  
        
    {
        "id": 8,
        "title": "Hold Person",
        "spellLvl": 2
    },      
            
    {
        "id": 9,
        "title": "Lesser Restoration",
        "spellLvl": 2
    },  
            
    {
        "id": 10,
        "title": "Invisibility",
        "spellLvl": 2
    },  
            
    {
        "id": 11,
        "title": "Fear",
        "spellLvl": 3
    },  
            
    {
        "id": 12,
        "title": "Dispel Magic",
        "spellLvl": 3
    }

]

let globalID = 13

module.exports = {
    getMovies: (req, res) => {
        res.status(200).send(movies)
    },
    deleteMovie: (req, res) => {
        let index = movies.findIndex(elem => elem.id === +req.params.id)
        movies.splice(index, 1)
        res.status(200).send(movies)
    },
    createMovie: (req, res) => {
        let {title, spellLvl} =req.body
        let newMovie = {
            id: globalID,
            title,
            spellLvl,
        }
        movies.push(newMovie)
        res.status(200).send(movies)


    },
    updateMovie: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = movies.findIndex(elem => +elem.id === +id)

        if (movies[index].rating === 5 && type === 'plus') {
            res.status(400).send('cannot go above 5')
        } else if (movies[index].rating === 0 && type === 'minus') {
            res.status(400).send('cannot go below 0')
        } else if (type === 'plus') {
            movies[index].rating++
            res.status(200).send(movies)
        } else if (type === 'minus') {
            movies[index].rating--
            res.status(200).send(movies)
        } else {
            res.sendStatus(400)
        }
    }
}

