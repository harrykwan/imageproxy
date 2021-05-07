const express = require('express')
const app = express()
const axios = require('axios').default;


app.get('/proxyurl/:photourl', function (req, res) {
    // Make a request for a user with a given ID
    const newurl = req.params.photourl.split('|').join('/').split('!').join('?')
    console.log(newurl)
    axios.get(newurl, {
        responseType: 'arraybuffer'
    })
        .then(function (response) {
            // handle success
            // console.log(response.data);
            res.setHeader("content-type", "image/jpeg");
            res.send(response.data)
        })
        .catch(function (error) {
            // handle error
            // console.log(error);
        })
})

app.listen(3000)