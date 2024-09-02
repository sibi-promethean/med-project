
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Sibi@5181',
    database: 'website',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// db.connect(err => {
//     if (err){
//         throw err;
//     }
//     console.log('MYSQL CONNECTED');
// });

const promisePool = pool.promise();


module.exports = {
    pool:promisePool
};