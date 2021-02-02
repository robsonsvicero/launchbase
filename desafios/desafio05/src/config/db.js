const { Pool } = require('pg')

module.exports = new Pool({
  user: 'rsvicero',
  password: 'pwd123',
  host: "localhost",
  port: 5432,
  database: "my_teacher"
})