const express = require('express')
const db = require('./data/db')
const app = express()

app.get('/', (req, res)=>{
  res.send('Hello its working')
})

app.get('/api/users', (req, res) => {
  db.find()
        .then(users => {
          res.json(users)
        })
        .catch(err => {
          console.log(`we got the error ${err} from server `)
        })
} )

app.get('/api/users/:id', (req, res) => {
  const { id } = req.params
  db.findById(id)
        .then(user => {
          res.json(user)
        })
        .catch(err => {
          console.log(`we got the error ${err} from server `)
        })
} )

app.listen(5000, ()=> console.log('Server running on port 5000'))