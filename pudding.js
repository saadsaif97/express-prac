const express = require('express')
const app = express()

const PORT = process.env.PORT || 4001

const puddingFlavors = ['chocolate', 'banana', 'butterscotch', 'pistachio']

const findPuddingIndex = (name) => {
  return puddingFlavors.indexOf(name)
}

const deletePuddingAtIndex = (index) => {
  puddingFlavors.splice(index, 1)
}

// Your code here!
app.delete('/puddings/:flavour', (req, res) => {
  const puddingToDel = req.params.flavour
  const indexToDel = findPuddingIndex(puddingToDel)
  if (indexToDel == -1) {
    return res.status(404).send()
  }

  deletePuddingAtIndex(indexToDel)

  res.status(204).send(puddingFlavors)
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
