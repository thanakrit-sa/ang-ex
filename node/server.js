const express = require('express');
const app = express();
const BodyParser = require('body-parser')
require('./db')
const feedbackModel = require('./feedback_schema')

app.use(BodyParser.json())
app.use(BodyParser.urlencoded())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE')
    // res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-access-token')
    res.setHeader('Access-Control-Allow-Credentials', true)

    next();
});


app.get('/', (req, res) => {
    res.end('Welcome')
})

app.post('/api', (req, res) => {
    const feedback = req.body.feedback; 
    const username = req.body.username;
    feedbackModel.create(req.body, (err, doc) => {
        if (err) res.json({ result: "Fail" });
        res.json({ result: "Success", username: username, feedback: feedback });
    })
    // res.end('Recive feedback : ' + feedback + username)
    // res.json({ result: "Success", username: username, feedback: feedback })
});

app.get('/api', (req, res) => {
    feedbackModel.find((err,doc) => {
        if (err) res.json({ result: "Fail"}); 
        res.json({ result: "Success", data: doc });   
    })
});

app.listen(3000, () => {
    console.log('Success');

})