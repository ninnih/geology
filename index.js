const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const apiPort = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use(express.static(path.resolve('./client/build')))


// app.get('/api/data', (req, res) => {
//     fetch('https://ninnih-portfolio.herokuapp.com/api/projects')
//     .then(res => res.json())
//     .then(data => { 
//         res.status(200).send(data.data)
//     })
// })


app.get('*', (req, res) => res.sendFile(path.resolve('client/build/index.html')));

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))