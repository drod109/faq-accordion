const allDetails = document.querySelectorAll("details");

function closeAllExcept(currentDetail) {
  allDetails.forEach((detail) => {
    if (detail !== currentDetail) {
      detail.removeAttribute("open");
    }
  });
}

allDetails.forEach((detail) => {
  detail.querySelector("summary").addEventListener("click", (event) => {
    event.preventDefault();

    const isOpen = detail.hasAttribute("open");

    closeAllExcept(detail);

    if (!isOpen) {
      detail.setAttribute("open", "");
    }
  });
});
