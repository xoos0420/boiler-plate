const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');

const config = require('./config/key.js');

const { User } = require('./models/user.js');

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI)
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello World'));
app.post('/register', async (req, res) => {
    // 회원 가입 할 때 필요한 정보들을 client에서 가져오면
    // 그것들을 데이터 베이스에 넣어줌
    const user = new User(req.body);

    try {
        const saveUser = await user.save();
        res.status(200).json({
            success: true, saveUser
        });
    } catch (err) {
        res.status(500).json({
            success: false, err
        })
    }
    // const result = await user.save().then(()=>{
    //     res.status(200).json({
    //       success: true
    //     })
    //   }).catch((err)=>{
    //     res.json({ success: false, err })
    //   })
});

app.listen(port, () => console.log(`Example App listening on port ${port}!`));