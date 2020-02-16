const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 4000;
const axios = require("axios");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

app.use(
    cors({
      origin: "http://localhost:3000",
      credentials: true
    })
  );
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


const { NAVER_API_ID, NAVER_API_SECRET } = process.env;

console.log(NAVER_API_ID,NAVER_API_SECRET )

app.get(`/movie`, async ({ query }, res) => {

    await axios("https://openapi.naver.com/v1/search/movie.json", {
        params: query,
        headers: {
            "X-Naver-Client-Id": NAVER_API_ID,
            "X-Naver-Client-Secret": NAVER_API_SECRET
        }
      }).then(
         result => {
             console.log(result);
             res.send(result);
         
         }
         
     ).catch(err => {
         res.send(err)
     })

   
    });
    
    
app.listen(port, () => console.log(`Listening on port ${port}`));