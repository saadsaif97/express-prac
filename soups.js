const express = require('express')
const app = express()

const PORT = process.env.PORT || 4001

const soups = ['gazpacho', 'borscht', 'primordial', 'avgolemono', 'laksa']

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

// /soups?name=something
app.post('/soups', (req, res) => {
  const newSoup = req.query.name
  soups.push(newSoup)
  res.status(201).send(soups)
})
