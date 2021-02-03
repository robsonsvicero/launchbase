const { age, date } = require('../../lib/utils')
const db = require('../../config/db')
// const Intl = require('intl')

module.exports = {
    index(req, res){
        db.query(`SELECT * FROM teachers`, function(err, results){
            if(err) return res.send('Database Error!')

            return res.render('teachers/index', {teachers: results.rows})
        })
    },
    create(req, res){
        return res.render("teachers/create")
    },
    post(req, res){
        const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == "") {
            return res.send("Please, fill all fields!")
        }
    }

    const query = `
    INSERT INTO teachers (
        avatar_url,
        name,
        birth_date,
        education_level,
        class_type,
        subjects_taught,
        created_at
    ) VALUES ($1, $2, $3, $4, $5, $6, $7)
    RETURNING id
    `
    const values = [
        req.body.avatar_url,
        req.body.name,
        date(req.body.birth).iso,
        req.body.schooling,
        req.body.classes,
        req.body.services,
        date(Date.now()).iso
    ]

    db.query(query, values, function(err, results){
        if(err) return res.send('Database Error!')
        return res.redirect(`/teachers/${results.rows[0].id}`)
    })

    },
    show(req, res){
        return
    },
    edit(req, res){
        return
    },
    put(req, res){
        const { id } = req.body
    let index = 0

    const foundTeacher = data.teachers.find(function(teacher, foundIndex) {
        if (id == teacher.id) {
            index = foundIndex
            return true
        }
    })

    if (!foundTeacher) return res.send("Teacher not found!")
    },
    delete(req, res){
        return
    }
}

// exports.index = function(req, res) {

//     return res.render('teachers/index', { teachers: data.teachers })
// }

// //CREATE
// exports.create = (req, res) => {
//     return res.render("teachers/create")
// }

// //POST
// exports.post = function(req, res) {
//     //Validando preenchimento dos dados
//     const keys = Object.keys(req.body)

//     for (key of keys) {
//         if (req.body[key] == "") {
//             return res.send("Please, fill all fields!")
//         }
//     }

//     let { avatar_url, name, birth, schooling, classes, services } = req.body

//     birth = Date.parse(birth)
//     const created_at = Date.now()
//     let id = 1
//     const lastTeacher = data.teachers[data.teachers.length - 1]

//     if (lastTeacher) {
//         id = lastTeacher.id + 1
//     }
//     services = services.split(",")

//     data.teachers.push({
//         id,
//         avatar_url,
//         name,
//         birth,
//         schooling,
//         classes,
//         services,
//         created_at
//     })

//     fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
//         if (err) return res.send("Write file error!")

//         return res.redirect("/teachers")
//     })
// }

// //SHOW
// exports.show = function(req, res) {
//     const { id } = req.params

//     const foundTeacher = data.teachers.find(function(teacher) {
//         return id == teacher.id
//     })

//     if (!foundTeacher) return res.send("Teacher not found!")

//     const teacher = {
//         ...foundTeacher,
//         age: age(foundTeacher.birth),
//         schooling: graduation(foundTeacher.schooling),
//         created_at: new Intl.DateTimeFormat('pt-BR').format(foundTeacher.created_at),
//     }

//     return res.render("teachers/show", { teacher })
// }

// //EDIT
// exports.edit = function(req, res) {
//     const { id } = req.params

//     const foundTeacher = data.teachers.find(function(teacher) {
//         return id == teacher.id
//     })

//     if (!foundTeacher) return res.send("Teacher not found!")
//     const teacher = {
//         ...foundTeacher,
//         birth: date(foundTeacher.birth).iso
//     }
//     return res.render('teachers/edit', { teacher })
// }

// //PUT
// exports.put = function(req, res) {
//     const { id } = req.body
//     let index = 0

//     const foundTeacher = data.teachers.find(function(teacher, foundIndex) {
//         if (id == teacher.id) {
//             index = foundIndex
//             return true
//         }
//     })

//     if (!foundTeacher) return res.send("Teacher not found!")

//     const teacher = {
//         ...foundTeacher,
//         ...req.body,
//         birth: Date.parse(req.body.birth),
//         id: Number(req.body.id),
//         services: req.body.services.split(",")
//     }
//     data.teachers[index] = teacher

//     fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
//         if (err) return res.send("Write file error!")

//         return res.redirect(`/teachers/${id}`)
//     })
// }

// //DELETE
// exports.delete = function(req, res) {
//     const { id } = req.body

//     const filteredTeachers = data.teachers.filter(function(teacher) {
//         return teacher.id != id
//     })
//     data.teachers = filteredTeachers

//     fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
//         if (err) return res.send("Write file error!")

//         return res.redirect('/teachers')
//     })
// }