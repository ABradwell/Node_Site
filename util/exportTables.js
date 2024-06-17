const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'admin',
  port: 5432,
})



module.exports = exportTable = (table_name) => {

    const queryString = `SELECT * FROM ${table_name}`;

    pool.query(queryString, (error, results) => {
        if (error) {
            throw error
        }
        console.log(`const table_${table_name} = `, results.rows)
        return results.rows;
    })
    
}