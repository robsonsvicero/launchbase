const db = require('../../config/db')
const { date, graduation } = require('../../lib/utils')

module.exports = {
  all(callback) {
    db.query(`
    SELECT *
    FROM teachers
    ORDER BY name ASC`, function(err, results){
      if(err) throw `Database Error! ${err}`

      callback(results.rows)
    })
  },
  create(data, callback) {
    const query = `
    INSERT INTO teachers (
      avatar_url,
      name,
      birth,
      schooling,
      classes,
      services,
      created_at
    ) VALUES ($1, $2, $3, $4, $5, $6, $7)
  RETURNING id
    `
    const values = [
      data.avatar_url,
      data.name,
      date(data.birth).iso,
      graduation(data.schooling),
      data.classes,
      data.services,
      date(Date.now()).iso
    ]

    db.query(query, values, function(err, results){
      if(err) throw `Database Error ${err}`

      callback(results.rows[0])
    })
  },
  find(id, callback) {
    db.query(`SELECT * FROM teachers WHERE id = $1`, [id], function(err, results) {
      if(err) throw `Database Error ${err}`

      callback(results.rows[0])
    })
  },
  findBy(filter, callback) {
    db.query(`
    SELECT teachers.*
    FROM teachers
    WHERE teachers.name ILIKE '%${filter}%'
    OR teachers.services ILIKE '%${filter}%'
    ORDER BY teachers.name ASC`, function(err, results){

      if(err) throw `Database Error ${err}`
      callback(results.rows)
    })
  },

  update(data, callback) {
    const query = `
    UPDATE teachers SET
    avatar_url=($1),
    name=($2),
    birth=($3),
    schooling=($4),
    classes=($5),
    services=($6)
    WHERE id = $7
    `
    const values = [
      data.avatar_url,
      data.name,
      date(data.birth).iso,
      graduation(data.schooling),
      data.classes,
      data.services,
      data.id
    ]
    db.query(query, values, function(err, results) {
      if(err) throw `Database Error! ${err}`

      callback()
    })
  },
  delete(id, callback) {
    db.query(`DELETE FROM teachers WHERE id = $1`, [id], function(err, results) {
      if(err) throw `Database Error! ${err}`

      callback()
    })
  }
}