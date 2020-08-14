const express = require('express')
const router = express.Router()

const produceBaskets = [
  { 
    id: 1,
    name: 'lemon cucumber'
  },
  { 
    id: 2,
    name: 'cauliflower'
  },
  { 
    id: 3,
    name: 'butternut squash'
  }
]

router.get('/', (req, res) => {
  res.send('basket route root rite?')
})

router.get('/:id', (req, res) => {
  const basketId = parseInt(req.params.id)
  console.log(req.params)
  const basket = produceBaskets.find(basket => basket.id === basketId)
  
  res.json(basket)
})

router.post('/', (req, res) => {
  res.send('your basket has been uploaded')
})

module.exports = router