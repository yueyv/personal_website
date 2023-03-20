const useSql=require('./mysql/configuration')
const express=require('express')
const app=express()
const port=3000
sql="select * from test"
const cb= (err, res) => {
    if (err) {
        console.log("err", err.message);
        result = err.message
        return;
    }
    app.get('/',(req,response)=>{
        response.send(res)
    })
}
useSql(sql,cb)
app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})
