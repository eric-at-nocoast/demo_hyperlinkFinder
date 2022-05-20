require("dotenv").config();
var axios = require("axios");

const encodedToken = Buffer.from(
  `${process.env.ZD_USER}/token:${process.env.ZD_TOKEN}`
).toString("base64");


let config = {
    method: "get",
    url: process.env.ZD_URL + `/api/v2/help_center/articles`,
    headers: {
      Authorization: `Basic ${encodedToken}`,
      "Content-Type": "application/json",
    }};

    axios(config)
    .then(function (response) {
      let sourceArr = response.data.articles
      let hyperLinkArr = []
      for(let i = 0; i < sourceArr.length; i++){
        let body = sourceArr[i].body
        if (body.indexOf("<a href=")!= -1){
          hyperLinkArr.push(sourceArr[i].id)
        }
      }
      console.log(hyperLinkArr)
    })
    .catch(function (error) {
      console.log(error);
    });

