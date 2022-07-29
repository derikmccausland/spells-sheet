// const spellsContainer = document.querySelector('#spells-container')
const addSpell = document.querySelector('#addSpell')
const baseURL = `http://localhost:4000`
const createSpell = () => {
   let newSpell = document.querySelector('#spellInput')
   let spellName = newSpell.textContent
   let spellLevel = document.querySelector('#spellLevel')
   let level = spellLevel.value 

    let spellOBJ = {
        title: spellName,
        spellLvl: level
    }
    axios.post(`${baseURL}/spells`, spellOBJ).then()
}
