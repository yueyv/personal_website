let mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '129218219',
    database: 'website'
})
module.exports = (sql,cb) => {
    connection.connect();
    connection.query(sql,cb)
    connection.end();

}