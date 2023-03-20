const axios = require('axios')
axios.get("http://localhost:3000/")
    .then((response) =>{
        console.log(response.data)
    })
    .catch(function (error) { // 请求失败处理
        console.log(error);
    });