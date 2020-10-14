const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const session = require('express-session');
const app = express();
const apiPort = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
  origin: true,
  credentials: true,
}))
app.use(bodyParser.json());

let intervalName = '';
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// });

// app.use(express.static(path.resolve('./client/build')))

app.get('/api/lithology', (req, res) => {
  fetch('https://macrostrat.org/api/v2/defs/lithologies?all')
  .then(res => res.json())
  .then(data => { 
    res.status(200).send(data.success.data)
  })
  .catch(error => console.log(error))
})

app.get('/api/minerals', (req, res) => {
    fetch('https://macrostrat.org/api/v2/defs/minerals?all')
    .then(res => res.json())
    .then(data => { 
      res.status(200).send(data.success.data)
    })
    .catch(error => console.log(error))
})

app.get('/api/intervals', (req, res) => {
  fetch(`https://macrostrat.org/api/defs/intervals?all`)
  .then(res => res.json())
  .then(data => { 
    res.status(200).send(data.success.data)
  })
  .catch(error => console.log(error))
})

app.post('/api/paleogeography', (req, res) => {
  intervalName = req.body.period;
})

app.get('/api/paleogeography', (req, res) => {
console.log(intervalName)
  fetch(`https://macrostrat.org/api/paleogeography?interval_name=${intervalName}`)
  .then(res => res.json())
  .then(data => { 
    res.status(200).send(data.success.data)
  })
  .catch(error => console.log(error))
})

// app.get('*', (req, res) => res.sendFile(path.resolve('client/build/index.html')));

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))