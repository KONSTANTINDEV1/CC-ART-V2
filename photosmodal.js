//--- IMG MODAL ---//

const outerModal = document.querySelector(".outer-modal");
const innerModal = document.querySelector(".inner-modal-photos");

function imgHandleClick(e) {
  const imgContainer = e.currentTarget;
  const img = imgContainer.closest(".single-photo-item-container");
  const imgSrc = img.querySelector("img").src;
  const Desc = img.dataset.description;
  const Contact = img.dataset.contact;
  const Name = img.dataset.name;

  innerModal.innerHTML = `
  <img src="${imgSrc}" alt="${Desc}"/>
  `;
  outerModal.classList.toggle("open");
  
}
console.log(innerModal);

// Close Modal
function closeModal() {
  outerModal.classList.remove('open');
}

window.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeModal();
  }
});
//--- ADD EVENTLISTENER TO ALL IMGS ---//
document
  .querySelectorAll(".img-modal")
  .forEach((item) => item.addEventListener("click", imgHandleClick));

//--- CLOSE MODAL WHEN CLICKING OUT OF IMG ---//
outerModal.addEventListener("click", function (e) {
  const isOutside = !e.target.closest(".inner-modal-photos");
  if (isOutside) {
    outerModal.classList.remove("open");
  }
});

