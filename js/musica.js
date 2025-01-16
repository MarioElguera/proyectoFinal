const sectionArea = document.querySelector("section");

document.querySelectorAll(".band-list li").forEach((item) => {
  item.addEventListener("mouseover", () => {
    const bgImage = item.getAttribute("data-bg");
    sectionArea.style.backgroundImage = `url('${bgImage}')`;
  });

  item.addEventListener("mouseout", () => {
    sectionArea.style.backgroundImage = "";
  });
});
