const cards = document.querySelectorAll('.card');

for (const card of cards) {
  card.addEventListener("click", function() {
    const siteId = card.getAttribute("id")
    window.location.href = `/recipe/${siteId}`
  })
}

const content = document.querySelectorAll('.recipe-wrapper .content');
const buttons = document.querySelectorAll('.button');


for (let [i, button] of buttons.entries()) {
  button.addEventListener("click", function() {
    if (content[i].classList.contains('show')) {
      content[i].classList.remove("show")
      content[i].classList.add("hide")
      button.innerHTML = 'MOSTRAR'
    } else {
      content[i].classList.add("show")
      content[i].classList.remove("hide")
      button.innerHTML = 'ESCONDER'
    }
  })
}