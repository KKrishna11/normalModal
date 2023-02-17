const openModalBtn = document.querySelector(".toggle");
const modal = document.querySelector(".modal");

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

cancelBtn = document.querySelector(".cancel");

cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});


document.querySelector('.modal-back').addEventListener('click', () => {
    modal.style.display = "none";
})


setTimeout(() => {
    console.log("after 5 sec")
}, 5000);