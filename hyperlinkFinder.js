require("dotenv").config();
var axios = require("axios");

// Encode the authentication credentials
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
    // Call the api and return the articles array
      let sourceArr = response.data.articles
      let hyperLinkArr = []
      //Loop through article array and push any that have an <a> tag into a new array and return to the console
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

