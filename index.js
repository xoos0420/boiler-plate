const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://xoos0420:<password>@boiler-plate.xxix3dh.mongodb.net/?retryWrites=true&w=majority&appName=boiler-plate', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));



app.get('/', (req, res) => res.send('Hello World'));

app.listen(port, () => console.log(`Example App listening on port ${port}`));