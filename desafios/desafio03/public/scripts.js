// const modalOverlay = document.querySelector('.modal-overlay');
// const modal = document.querySelector('.modal');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener("click", function() {
    const blogId = card.getAttribute("id")
    window.open(`https://blog.rocketseat.com.br/${blogId}`, `_blank`);
  })
}

//MAXIMIZAR O MODAL
// document.querySelector('.max-modal').addEventListener("click", function() {
//   if (modal.classList.contains('maximize') != true) {
//     modal.classList.add('maximize')
//   } else {
//     modal.classList.remove('maximize')
//   }
// })

// document.querySelector('.close-modal').addEventListener("click", function() {
//   modalOverlay.classList.remove("active")
//   modal.classList.remove('maximize')
//   modalOverlay.querySelector("iframe").src = ' '
// })