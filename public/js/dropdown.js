var dropdown = document.querySelector(".backdrop");
var modal = document.querySelector(".drop_modal");
var closeModalButton = document.querySelector("#closeModalButton");

closeModalButton.addEventListener("click", () => {
  closeModal()
})

dropdown.addEventListener("click", () => {
  closeModal()
})

    document.addEventListener('DOMContentLoaded', () => {    
      setTimeout(fireModel, 3000);
    })

    const fireModel = () => {
      
      dropdown.classList.add("openBackDrop");
      modal.classList.add("openModal");
      //setTimeout(closeModal, 9000);
    }

    const closeModal = () => {
      dropdown.classList.remove("openBackDrop");
      modal.classList.remove("openModal");
    }
    