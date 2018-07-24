const express = require('express')
const db = require('./data/db')
const app = express()

app.get('/api/users', (req, res) => {
  db.find()
        .then(users => {
          if(users.length === 0){
            res.status(404).json({ message : `No users available` })
          }else {
            res.json(users)
          }
        })
        .catch(err => {
          console.log(`we got the error ${err} from server `)
        })
} )

app.get('/api/users/:id', (req, res) => {
  const { id } = req.params
  db.findById(id)
        .then(user => {
          if(user.length === 0){
            res.status(404).json({message : `user not found`})
          }
          else {
            res.status(200).json(user)
          }
        })
        .catch(err => {
          res.status(400).json({ error : `the server return ${err}`  })
        })
} )

app.listen(5000, ()=> console.log('Server running on port 5000'))