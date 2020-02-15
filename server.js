const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const axios = require("axios");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const { NAVER_API_ID, NAVER_API_SECRET } = process.env;

app.get(`movie`, async ({ query }, req, res) => {

    await axios("https://openapi.naver.com/v1/search/movie.json", {
        params: query,
        headers: {
            "X-Naver-Client-Id": NAVER_API_ID,
            "X-Naver-Client-Secret": NAVER_API_SECRET
        }
      }).then(
         res => {
             res.send(res)
         }
         
     ).catch(err => {
         res.send(err)
     })

   
    });
    
    
app.listen(port, () => console.log(`Listening on port ${port}`));