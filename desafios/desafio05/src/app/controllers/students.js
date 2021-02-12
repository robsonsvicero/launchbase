const Student = require('../models/Students')
const { date, grade } = require('../../lib/utils')

module.exports = {
  index(req, res) {
    Student.all(function(students) {
      return res.render('students/index', { students })
    })
  },
  create(req, res) {
    Student.teachersSelectOptions(function(options) {
      return res.render('students/create', { teacherOptions: options })
    })
  },
  post(req,res) {
    const keys = Object.keys(req.body)

    for (key of keys) {
      if (req.body[key] == "") {
        return res.send("Please, fill all fields!")
      }
    }  

    Student.create(req.body, function(student) {
      return res.redirect(`/students/${student.id}`)
    })
  },
  show(req, res) {
    Student.find(req.params.id, function(student) {
      if(!student) return res.send('Student not found!')
      student.birth = date(student.birth).birthDay
      student.grade = grade(student.school_year)

      return res.render('students/show', { student })
    })
  },
  edit(req, res) {
    Student.find(req.params.id, function(student) {
      if(!student) return res.send('Student not found!')
      student.birth = date(student.birth).iso
      student.grade = grade(student.school_year)

      Student.teachersSelectOptions(function(options) {
        return res.render('students/edit', { student, teacherOptions: options })
      })
    })
  },
  put(req, res) {
    const keys = Object.keys(req.body)
    for(key of keys) {
      if(req.body[key] == "") {
        return res.send('Please, fill all fields!')
      }
    }

    Student.update(req.body, function(){
      return res.redirect(`students/${req.body.id}`)
    })
  },
  delete(req, res) {
    Student.delete(req.body.id, function(){
      return res.redirect('/students')
    })
  }
}






// exports.index = function(req, res) {
//   const students = []
//   for (let student of data.students) {
//     students.push({
//       ...student,
//       school_year: grade(student.school_year)
//     })
//   }
//   return res.render('students/index', { students })
// }

// //CREATE
// exports.create = function(req, res) {
//   return res.render("students/create")
// }

// //POST
// exports.post = function(req, res) {
//   //Validando preenchimento dos dados
//   const keys = Object.keys(req.body)

//   for (key of keys) {
//     if (req.body[key] == "") {
//       return res.send("Please, fill all fields!")
//     }
//   }

//   birth = Date.parse(req.body.birth)
//   let id = 1
//   const lastStudent = data.students[data.students.length - 1]

//   if (lastStudent) {
//     id = lastStudent.id + 1
//   }

//   data.students.push({
//     ...req.body,
//     id,
//     birth
//   })

//   fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
//     if (err) return res.send("Write file error!")

//     return res.redirect("/students")
//   })
// }

// //SHOW
// exports.show = function(req, res) {
//   const { id } = req.params

//   const foundStudent = data.students.find(function(student) {
//     return id == student.id
//   })

//   if (!foundStudent) return res.send("Student not found!")

//   const student = {
//     ...foundStudent,
//     birth: date(foundStudent.birth).birthDay,
//     school_year: grade(foundStudent.school_year)
//   }

//   return res.render("students/show", { student })
// }

// //EDIT
// exports.edit = function(req, res) {
//   const { id } = req.params

//   const foundStudent = data.students.find(function(student) {
//     return id == student.id
//   })

//   if (!foundStudent) return res.send("Student not found!")

//   const student = {
//     ...foundStudent,
//     birth: date(foundStudent.birth).iso
//   }

//   return res.render('students/edit', { student })
// }

// //PUT
// exports.put = function(req, res) {
//   const { id } = req.body
//   let index = 0

//   const foundStudent = data.students.find(function(student, foundIndex) {
//     if (id == student.id) {
//       index = foundIndex
//       return true
//     }
//   })

//   if (!foundStudent) return res.send("Student not found!")

//   const student = {
//     ...foundStudent,
//     ...req.body,
//     birth: Date.parse(req.body.birth),
//     id: Number(req.body.id)
//   }

//   data.students[index] = student

//   fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
//     if (err) return res.send("Write file error!")

//     return res.redirect(`/students/${id}`)
//   })
// }

// //DELETE
// exports.delete = function(req, res) {
//   const { id } = req.body

//   const filteredStudents = data.students.filter(function(student) {
//     return student.id != id
//   })
//   data.students = filteredStudents

//   fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
//     if (err) return res.send("Write file error!")

//     return res.redirect('/students')
//   })
// }