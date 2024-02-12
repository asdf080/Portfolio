let prevScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const ul = document.querySelector("nav ul");

  if (ul) {
    const currScrollY = window.scrollY;

    if (currScrollY > prevScrollY) {
      // 스크롤 내릴 때
      ul.classList.add("navDown");
    } else {
      // 스크롤 올릴 때
      ul.classList.remove("navDown");
    }

    prevScrollY = currScrollY; // 이전 스크롤 위치 업데이트
  }
});
