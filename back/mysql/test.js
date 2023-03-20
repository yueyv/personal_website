const useSql=require('./configuration')
sql="select * from test"
const cb= (err, res) => {
    if (err) {
        console.log("err", err.message);
        result = err.message
        return;
    }
    console.log(res)
}
useSql(sql,cb)