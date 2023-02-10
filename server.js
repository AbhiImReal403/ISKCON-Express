const express = require('express');
const fs = require('fs');
const jsonParser = require('jsonparser');


const festivals = require('./festivals.json');
const device = require('express-device');

const app = express();
app.use(device.capture());

app.use('/statics', express.static('public'));

app.set('view engine', 'ejs');

app.listen(5000)
console.log('listening on port 3000')


app.get('/', (req, res) => {
    // console.log(req.device.type)
    res.render('index', { curr: 'home', device: req.device.type })
});


// fs.readFile('./festivals/festivals.json','utf-8',(err,data) => {
//     if(err){
//         console.log(err);
//     }
//         console.log(data);
//         try {
//             JSON.parse(data)
//         } catch (error) {
//             console.log('there is  an error in parsing the Json data : ',error)
//         }
//         // console.log(JSON.parse(data));
//         // console.log(data.toString());
//         // console.log(JSON.stringify(data.toString()));
//         // console.log(typeof JSON.stringify(data));



//         // return data
// })
// // console.log(file)
let festivalsArray = [];

if (fs.existsSync('./festivals')) {
    const festJsonList = fs.readdirSync('./festivals');
    festJsonList.forEach((filename) => {
        if (filename.split('.').pop() === 'json') {
            fs.readFile(`./festivals/${filename}`, 'utf-8', (err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }
                // console.log(data);
                try {
                    festivalsArray.push(JSON.parse(data));
                    // JSON.parse(data)
                } catch (error) {
                    console.log('there is  an error in parsing the Json data : ', error)
                }
            })
        }
    })
}

// console.log(festivalsArray);


app.get('/festivals', async (req, res) => {
    res.render('festivals', { festivals: festivalsArray, curr: 'festivals' })
})

app.get('/festivals/:festive-:festIndex', async (req, res) => {
    // console.log(req.params);
    // console.log(festivals[req.params.festIndex].title);
    // res.send(`the params are ${req.params.festive}`);
    if (festivalsArray[req.params.festIndex] && festivalsArray[req.params.festIndex].title === req.params.festive) {
        res.render('festival', { festival: festivalsArray[req.params.festIndex], curr: 'festivals' });

    } else {
        res.send('error')
    }

})

let galleryArray = [];

if (fs.existsSync('./public/Assets/images/gallery')) {
    const imgsJsonList = fs.readdirSync('./public/Assets/images/gallery');
    // console.log(imgsJsonList)
    imgsJsonList.forEach((filename) => {
        if (filename.split('.').pop() === 'jpg' || filename.split('.').pop() === 'jpeg') {

            galleryArray.push(filename)
            //     fs.readFile(`./public/Assets/images/gallery${filename}`, 'utf-8', (err, data) => {
            //         if (err) {
            //             console.log(err);
            //             return;
            //         }
            //         // console.log(data);
            //         try {
            //             galleryArray.push(JSON.parse(data));
            //             JSON.parse(data)
            //         } catch (error) {
            //             console.log('there is  an error in parsing the Json data : ', error)
            //         }
            //     })
        }
    })
}


app.get('/gallery', (req, res) => {

    res.render('./2.0/gallery3', { images: galleryArray, curr: 'gallery' })
    // console.log(festivals[1].content)
})



app.get('/gallery2.0', (req, res) => {

    res.render('./2.0/gallery2', { images: galleryArray, curr: 'gallery' })
    // console.log(festivals[1].content)
})
app.get('/gallery3', (req, res) => {

    res.render('./2.0/gallery3.2.ejs', { images: galleryArray, curr: 'gallery' })
    // console.log(festivals[1].content)
})



