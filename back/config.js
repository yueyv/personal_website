
const configs = {
    mysql: {
        host: 'localhost',
        user: 'root',
        password: '129218219',
        port: '3306',
        database: 'expressFrame'
    },
    log:{
        error(message){
            console.log('[knex error]',message)
        }
    }
};
module.exports=configs
