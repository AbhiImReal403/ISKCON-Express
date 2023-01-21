const express = require('express');
const festivals = require('./festivals.json');

const app = express();

app.use('/statics', express.static('public'));

app.set('view engine', 'ejs');

app.listen(3000)
console.log('listening on port 3000')


app.get('/', (req, res) => {
    res.render('index')
})
app.get('/festivals', async (req, res) => {
    res.render('festivals', { festivals })
})
app.get('/festivals/:festive-:festIndex', async (req, res) => {
    console.log(req.params);
    console.log(festivals[req.params.festIndex].title);
    // res.send(`the params are ${req.params.festive}`);
    if (festivals[req.params.festIndex]&&festivals[req.params.festIndex].title === req.params.festive) {
        res.render('festival', { festival: festivals[req.params.festIndex] });

    }else{
        res.send('error')
    }

})
app.get('/test', (req, res) => {

    res.render('test2')
    // console.log(festivals[1].content)
})