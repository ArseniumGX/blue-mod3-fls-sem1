const fs = require('fs')
const filePath = process.cwd() + '/src/database/database.json'

const save = content => fs.writeFileSync(filePath, JSON.stringify(content))
const load = () => JSON.parse(fs.readFileSync(filePath, 'utf-8'))

module.exports = { save, load }