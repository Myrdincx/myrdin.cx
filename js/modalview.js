const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const openLink = document.getElementById("openInNewTab");

document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    openLink.href = img.src;
    modal.style.display = "flex";
  });
});

function closeModal(event) {
  if (!event.target.closest("img") && !event.target.closest("a")) {
    modal.style.display = "none";
  }
}
