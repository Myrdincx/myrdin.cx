const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const openLink = document.getElementById("openInNewTab");

const images = Array.from(document.querySelectorAll(".gallery img"));
let currentIndex = -1;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    openModalWithImage(img.src);
  });
});

function openModalWithImage(src) {
  modalImg.src = src;
  openLink.href = src;
  modal.style.display = "flex";
}

function closeModal(event) {
  if (!event.target.closest("img") && !event.target.closest("a")) {
    modal.style.display = "none";
  }
}

function showPrevImage(event) {
  event.stopPropagation();
  if (currentIndex > 0) {
    currentIndex--;
    const newSrc = images[currentIndex].src;
    openModalWithImage(newSrc);
  }
}

function showNextImage(event) {
  event.stopPropagation();
  if (currentIndex < images.length - 1) {
    currentIndex++;
    const newSrc = images[currentIndex].src;
    openModalWithImage(newSrc);
  }
}
