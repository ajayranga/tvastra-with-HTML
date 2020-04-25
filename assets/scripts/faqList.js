let arrows = document.querySelectorAll(".arrow");
let paras = document.querySelectorAll(".para");
paras.forEach(function(item) {
  item.classList.remove("active");
});
arrows.forEach(function(item) {
  item.addEventListener("click", open);
  item.classList.remove("active");
});

function open() {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
    this.parentNode.nextSibling.nextSibling.classList.remove("active");
  } else {
    this.classList.add("active");
    this.parentNode.nextSibling.nextSibling.classList.add("active");
  }
}
arrows[0].classList.add("active");
paras[0].classList.add("active");
// var arrow = document.querySelectorAll(".arrow");
// var item = document.querySelectorAll(".item");
// for (var i = 0; i < arrow.length; i++) {
//   arrow[i].addEventListener("click", showpara);
// }

// function showpara() {
//   var id = parseInt(this.id.split("")[this.id.split("").length - 1]);
//   for (var i = 1; i <= arrow.length; i++) {
//     if (i !== id) {
//       arrow[i - 1].innerHTML = `<i class="fas fa-chevron-down"></i>`;
//       item[i - 1].classList.remove("active");
//     } else {
//       if (item[i - 1].classList.contains("active")) {
//         arrow[i - 1].innerHTML = `<i class="fas fa-chevron-down"></i>`;
//         item[i - 1].classList.remove("active");
//       } else {
//         arrow[i - 1].innerHTML = `<i class="fas fa-chevron-up"></i>`;
//         item[i - 1].classList.add("active");
//       }
//     }
//   }
// }
