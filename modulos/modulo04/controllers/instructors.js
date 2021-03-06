const fs = require('fs')
const data = require('../data.json')
const { age, date } = require('../utils')
const Intl = require('intl')

exports.index = function(req, res) {
  return res.render('instructors/index', { instructors: data.instructors })
}

//CREATE
exports.create = (req, res) => {
  return res.render('instructors/create')
}

//Exportar funções para 
//POST
exports.post = function(req, res) {
  // Validando se todos os dados estão preenchidos
  const keys = Object.keys(req.body)

  for (key of keys) {
    //req.body.avatar_url
    if (req.body[key] == "") {
      return res.send("Please, fill all fields!")
    }
  }

  let { avatar_url, name, birth, gender, services } = req.body

  birth = Date.parse(birth)
  const created_at = Date.now()
  const id = Number(data.instructors.length + 1)
  services = services.split(",")

  data.instructors.push({
    id,
    avatar_url,
    name,
    birth,
    gender,
    services,
    created_at
  })

  fs.writeFile('data.json', JSON.stringify(data, null, 2), function(err) {
      if (err) return res.send("Write file error!")

      return res.redirect("/instructors")
    })
    // return res.send(req.body)
}

// SHOW
exports.show = function(req, res) {
  const { id } = req.params

  const foundInstructor = data.instructors.find(function(instructor) {
    return id == instructor.id
  })

  if (!foundInstructor) return res.send("Instructor not found!")

  const instructor = {
    ...foundInstructor,
    age: age(foundInstructor.birth),
    created_at: new Intl.DateTimeFormat('pt-BR').format(foundInstructor.created_at),
  }

  return res.render("instructors/show", { instructor })

}

//EDIT
exports.edit = function(req, res) {
  const { id } = req.params

  const foundInstructor = data.instructors.find(function(instructor) {
    return id == instructor.id
  })

  if (!foundInstructor) return res.send("Instructor not found!")

  const instructor = {
    ...foundInstructor,
    birth: date(foundInstructor.birth).iso
  }

  return res.render('instructors/edit', { instructor })
}

//PUT
exports.put = function(req, res) {
  const { id } = req.body
  let index = 0

  const foundInstructor = data.instructors.find(function(instructor, foundIndex) {
    if (id == instructor.id) {
      index = foundIndex
      return true
    }
  })

  if (!foundInstructor) return res.send("Instructor not found!")

  const instructor = {
    ...foundInstructor,
    ...req.body,
    birth: Date.parse(req.body.birth),
    id: Number(req.body.id),
    services: req.body.services.split(",")
  }

  data.instructors[index] = instructor

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Write error!")

    return res.redirect(`/instructors/${id}`)
  })

}

//DELETE
exports.delete = function(req, res) {
  const { id } = req.body

  const filteredInstructors = data.instructors.filter(function(instructor) {
    return instructor.id != id
  })
  data.instructors = filteredInstructors

  fs.writeFile("data.json", JSON.stringify(data, null, 2), function(err) {
    if (err) return res.send("Write file error!")

    return res.redirect('/instructors')

  })
}