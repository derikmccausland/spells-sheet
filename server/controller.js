let spells = require('./db.json')
let globalID = 13

module.exports = {
    getspells: (req, res) => {
        res.status(200).send(spells)
    },
    deletespell: (req, res) => {
        let index = spells.findIndex(elem => elem.id === +req.params.id)
        spells.splice(index, 1)
        res.status(200).send(spells)
    },
    createspell: (req, res) => {
        let {title,} =req.body
        let newSpell = {
            id: globalID,
            title,
            spellLvl,
        }
        spells.push(newSpell)
        res.status(200).send(spells)
    }
}
// updatespell: (req, res) => {
//     let { id } = req.params
//     let { type } = req.body
//     let index = spells.findIndex(elem => +elem.id === +id)

//     if (spells[index].rating === 5 && type === 'plus') {
//         res.status(400).send('cannot go above 5')
//     } else if (spells[index].rating === 0 && type === 'minus') {
//         res.status(400).send('cannot go below 0')
//     } else if (type === 'plus') {
//         spells[index].rating++
//         res.status(200).send(spells)
//     } else if (type === 'minus') {
//         spells[index].rating--
//         res.status(200).send(spells)
//     } else {
//         res.sendStatus(400)
//     }
// }