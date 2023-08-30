window.addEventListener("click", (e) => {
  const dropdowns = document.getElementsByClassName("dropdown-menu show");
  const arr = Array.from(dropdowns);

  for (let d of arr) {
    if (d) {
      const p = d.parentElement;

      if (p.contains(e.target) && e.target != p) {
      } else {
        d.classList.remove("show");
      }
    }
  }
});

const dropdowns_arr = document.getElementsByClassName("dropdown-button");
const dropdowns = Array.from(dropdowns_arr);

for (const dropdown of dropdowns) {
  dropdown.addEventListener("click", (e) => {
    const menu = dropdown.nextElementSibling;
    if (menu) {
      if (menu.classList.contains("show")) {
        menu.classList.remove("show");
      } else {
        menu.classList.add("show");
      }
    }
  });
}

const h_icons_arr = document.getElementsByClassName("header-icon");
const h_icons = Array.from(h_icons_arr);
for (let icon of h_icons) {
  icon.addEventListener("click", (e) => {
    for (let i of h_icons) {
      i.classList.remove("selected");
    }
    icon.classList.add("selected");
  });
}
