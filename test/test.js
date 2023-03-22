var mysql  = require('mysql');  
 
var connection = mysql.createConnection({     
  host     : '114.132.50.228',       
  user     : 'root',              
  password : '129218219',       
  port: '3306',                   
  database: 'website' 
}); 
 
connection.connect();
 
var  sql = 'SELECT * FROM user';
//查
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       console.log('------------------------------------------------------------\n\n');  
});
 
connection.end();