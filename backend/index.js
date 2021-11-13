
const express = require('express')
const app = express()
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/ticket/:id', (req, res) => {
  res.json({ doge: 'Hello, I am doge' });
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})