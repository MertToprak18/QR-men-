//import kısmı her zaman en üstte bulunur.
import { renderMenuItems, renderButtons } from "./scripts/ui.js";

//! htmlden gelenler

const menuList = document.querySelector("#menu-list");
const buttonsArea = document.getElementById("buttons");

document.addEventListener("DOMContentLoaded", () => {
  fetchMenu();
  renderButtons();
});

//* datayı global scopea tanımladık çıkarttık.
let data;

// datayı block scopeda kullanabiliyorum
async function fetchMenu() {
  const res = await fetch("./db.json");
  data = await res.json();
  renderMenuItems(data.menu, menuList);
}

buttonsArea.addEventListener("click", (e) => {
  if (e.target.id !== "buttons") {
    renderButtons(e.target.innerText);
  }
  //* seçili kategoriye erişme
  const selected = e.target.dataset.category;

  if (selected === "all") {
    //* all hepsi için filtrelmee yapma apidan gelen bütün verileri ekrana bas
    renderMenuItems(data.menu, menuList);
  } else {
    //* seçili kategoriye göre apidan gelen veriyi filtrele
    const filtred = data.menu.filter((item) => item.category === selected);
    //* filtrelenmiş veriyi ekrana bas.
    renderMenuItems(filtred, menuList);
  }
});
