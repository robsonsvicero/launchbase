const express = require('express')
const nunjucks = require('nunjucks')

const courses = require('./data')

const server = express()


server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoscape: false
})

server.get("/", function(req, res) {
  const about = {
    avatar: "/assets/logo-rocketseat.png",
    name: "Rocketseat",
    description: "As melhores tecnologias em programação, direto ao ponto e do jeito certo. No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa.",
    links: [
      { name: "Github", url: "https://github.com/Rocketseat" },
      { name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/" },
      { name: "Facebook", url: "https://www.facebook.com/rocketseat" },

    ]
  }
  return res.render("sobre", { about })
})

server.get("/sobre", function(req, res) {
  const about = {
    avatar: "/assets/logo-rocketseat.png",
    name: "Rocketseat",
    description: "As melhores tecnologias em programação, direto ao ponto e do jeito certo. No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa.",
    links: [
      { name: "Github", url: "https://github.com/Rocketseat" },
      { name: "Instagram", url: "https://www.instagram.com/rocketseat_oficial/" },
      { name: "Facebook", url: "https://www.facebook.com/rocketseat" },

    ]
  }
  return res.render("sobre", { about })
})

server.get("/course", function(req, res) {
  return res.render("course", { items: courses })
})

server.get("/courses/:id", function(req, res) {
  const id = req.params.id
  const course = courses.find(function() {
    return course.id == id
  })
  if (!course) {
    return res.send("Course not found!")
  }
  return res.render("courses", { item: courses })
})

server.use(function(req, res) {
  res.status(404).render("not-found");
});

server.listen(5500, function() {
  console.log("server is running!")
})