const ul = document.querySelector("nav ul");
let prevScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  try {
    const currScrollY = window.scrollY;
    if (currScrollY > prevScrollY) {
      // 스크롤 내릴 때
      ul.classList.add("navDown");
    } else {
      // 스크롤 올릴 때
      ul.classList.remove("navDown");
    }

    prevScrollY = currScrollY;
  } catch (error) {}
});
