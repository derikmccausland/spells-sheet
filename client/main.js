const moviesContainer = document.querySelector('#movies-container')
const form = document.querySelector('form')

const baseURL = `http://localhost:4000/api/movies`

const moviesCallback = ({ data: movies }) => displayMovies(movies)
const errCallback = err => console.log(err.response.data)

const getAllMovies = () => axios.get(baseURL).then(moviesCallback).catch(errCallback)
const createMovie = body => axios.post(baseURL, body).then(moviesCallback).catch(errCallback)
const deleteMovie = id => axios.delete(`${baseURL}/${id}`).then(moviesCallback).catch(errCallback)

function submitHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let spellLvl = document.querySelector('input[name="ratings"]:checked')

    let bodyObj = {
        title: title.value,
        spellLvl: spellLvl.value, 
    }

    createMovie(bodyObj)

    title.value = ''
    spellLvl.value = false
}
// ${movie.title},${movie.spellLvl}
function createMovieCard(movie) {
    const movieCard = document.createElement('div')
    movieCard.classList.add('movie-card')

    movieCard.innerHTML = `
    <button onclick="castSpell(${movie.spellLvl})">Cast Spell</button>
    <p class="movie-title">${movie.title}</p>
    <div class="btns-container">
    
        <p class="movie-spellLvl">${movie.spellLvl}</p>
        
    </div>
    <button onclick="deleteMovie(${movie.id})">Remove Spell</button>
    `


    moviesContainer.appendChild(movieCard)
}

function displayMovies(arr) {
    let arr2 = arr.sort(function(a, b) {
        return a.spellLvl - b.spellLvl
    })
    moviesContainer.innerHTML = ``
    for (let i = 0; i < arr2.length; i++) {
        createMovieCard(arr[i])
    }
}

function castSpell(lvl) {
    if(lvl === 0) {
        alert(`You have cast a level ${lvl} spell!`)
    } 
     else if (lvl === 1) {
        if (document.getElementById('spelslot1').checked === false) {
            document.getElementById('spelslot1').checked = true
            alert(`You have cast a level ${lvl} spell!`)
    } else if (document.getElementById('spelslot2').checked === false) {
        document.getElementById('spelslot2').checked = true
        alert(`You have cast a level ${lvl} spell!`)
    }  else if (document.getElementById('spelslot3').checked === false) {
        document.getElementById('spelslot3').checked = true
        alert(`You have cast a level ${lvl} spell!`)
    }  else if (document.getElementById('spelslot4').checked === false) {
        document.getElementById('spelslot4').checked = true
        alert(`You have cast a level ${lvl} spell!`)
    } else {
        alert(`You don't have the slots to cast a level ${lvl} spell!`)
    }
}
    else if (lvl === 2) {
        if (document.getElementById('spelslot5').checked === false) {
            document.getElementById('spelslot5').checked = true
            alert(`You have cast a level ${lvl} spell!`)
        } else if (document.getElementById('spelslot6').checked === false) {
            document.getElementById('spelslot6').checked = true
            alert(`You have cast a level ${lvl} spell!`)
        }  else if (document.getElementById('spelslot7').checked === false) {
            document.getElementById('spelslot7').checked = true
            alert(`You have cast a level ${lvl} spell!`)
        } else {
            alert(`You don't have the slots to cast a level ${lvl} spell!`)
        }
    }
    else if (lvl === 3) {
        if (document.getElementById('spelslot8').checked === false) {
            document.getElementById('spelslot8').checked = true
            alert(`You have cast a level ${lvl} spell!`)
        } else if (document.getElementById('spelslot9').checked === false) {
            document.getElementById('spelslot9').checked = true
            alert(`You have cast a level ${lvl} spell!`)
        } else {
            alert(`You don't have the slots to cast a level ${lvl} spell!`)
        }
    } else {
        alert(`You don't have the slots to cast a level ${lvl} spell!`)
    }

    // console.log(spell)
    // console.log(lvl)
    // // if (lvl ===0) {
    // //     alert(`You have cast ${spell}!`)
    // // }
    // // let x = lvl
    // switch (lvl) {
    //     case '0': 
    //         alert(`You have cast a ${lvl} level spell!`)
    //         break;
    //     case '1': 
    //     alert(`You have cast a ${lvl} level spell!`)
    //         break;
    //     case '2': 
    //     alert(`You have cast a ${lvl} level spell!`)
    //         break;
    //     case '3': 
    //     alert(`You have cast a ${lvl} level spell!`)
    //         break;
    //     default:
    //         alert(`You don't have the slots to cast a level ${lvl} spell!`)
    // }
}


form.addEventListener('submit', submitHandler)

getAllMovies()