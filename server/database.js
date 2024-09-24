const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    password: 'sai@2002',
    host: 'localhost',
    port: 5434,
    database: 'BANK'
});
module.exports = pool;
