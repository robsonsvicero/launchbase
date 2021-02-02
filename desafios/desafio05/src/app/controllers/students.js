const fs = require("fs")
const { date, grade } = require('../../lib/utils')
const Intl = require('intl')

exports.index = function(req, res) {
  const students = []
  for (let student of data.students) {
    students.push({
      ...student,
      school_year: grade(student.school_year)
    })
  }
  return res.render('students/index', { students })
}

//CREATE
exports.create = function(req, res) {
  return res.render("students/create")
}

//POST
exports.post = function(req, res) {
  //Validando preenchimento dos dados
  const keys = Object.keys(req.body)

  for (key of keys) {
    if (req.body[key] == "") {
      return res.send("Please, fill all fields!")
    }
  }

  birth = Date.parse(req.body.birth)
  let id = 1
  const lastStudent = data.students[data.students.length - 1]

  if (lastStudent) {
    id = lastStudent.id + 1
  }

  data.students.push({
    ...req.body,
    id,
    birth
  })

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Write file error!")

    return res.redirect("/students")
  })
}

//SHOW
exports.show = function(req, res) {
  const { id } = req.params

  const foundStudent = data.students.find(function(student) {
    return id == student.id
  })

  if (!foundStudent) return res.send("Student not found!")

  const student = {
    ...foundStudent,
    birth: date(foundStudent.birth).birthDay,
    school_year: grade(foundStudent.school_year)
  }

  return res.render("students/show", { student })
}

//EDIT
exports.edit = function(req, res) {
  const { id } = req.params

  const foundStudent = data.students.find(function(student) {
    return id == student.id
  })

  if (!foundStudent) return res.send("Student not found!")

  const student = {
    ...foundStudent,
    birth: date(foundStudent.birth).iso
  }

  return res.render('students/edit', { student })
}

//PUT
exports.put = function(req, res) {
  const { id } = req.body
  let index = 0

  const foundStudent = data.students.find(function(student, foundIndex) {
    if (id == student.id) {
      index = foundIndex
      return true
    }
  })

  if (!foundStudent) return res.send("Student not found!")

  const student = {
    ...foundStudent,
    ...req.body,
    birth: Date.parse(req.body.birth),
    id: Number(req.body.id)
  }

  data.students[index] = student

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Write file error!")

    return res.redirect(`/students/${id}`)
  })
}

//DELETE
exports.delete = function(req, res) {
  const { id } = req.body

  const filteredStudents = data.students.filter(function(student) {
    return student.id != id
  })
  data.students = filteredStudents

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Write file error!")

    return res.redirect('/students')
  })
}