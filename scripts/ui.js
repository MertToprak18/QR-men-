//! export import
// export ile bir değişkeni yada fonksiyonu dışarıdan kullanılabilecek şekilde açarız.
// export için 2 farklı yöntem var.
//* 1.yöntemde export default yanına fonksiyonun ismi şeklinde
//* 2. yöntem ise fonksiyonların yada değişkenlerin direk başına export yazarak
// import ile ise dışardan açılan değişeni yada fonksiyonu kullanmak için içeriye alırız.
//* export yöntemlerinin farkı import kısmında değişiyor.
//* eğer 1.yöntemle yani default yöntemiyle export edersem import ederken süslü parantez gerekmez
//*ve istediğim ismi verebilirim
//* ama 2. yöntemle export edersem süslü parantez kullanmam lazım ve direk ismini yazmam gerekir.
import { buttonData } from "./constants.js";

const buttonArea = document.getElementById("buttons");

// ekrana menü elemanları basmamı sağlar
export function renderMenuItems(products, menuList) {
  //! href içerisinde search parametre kullanarak her ürünün idsini urle ekledik
  menuList.innerHTML = products
    .map(
      (product) =>
        `
      <a
          id="card"
          href="/detail.html?id=${product.id}"
          class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3"
        >
          <img
            class="rounded shadow img-fluid"
            src="${product.img}"
            alt=""
          />
          <div>
          <div class="d-flex justify-content-between">
            <h5>${product.title}</h5>
            <p class="text-success fw-bold">${(product.price * 35).toFixed(
              2
            )}₺</p>
          </div>
          <p class="lead">
            ${product.desc.slice(0, 70) + "..."}
          </p>
          </div>
        </a>
      `
    )
    .join(" ");
}

// ekrana butonları basar

export function renderButtons(tiklanmisButonunYazisi) {
  buttonArea.innerHTML = "";

  buttonData.forEach((btn) => {
    //* button elementi oluştur
    const buttonElement = document.createElement("button");
    // buton elementinin classlarını ver
    buttonElement.className = "btn btn-outline-dark";

    //* eğerki tıklanılan elemanın içindeki yazı
    //* bizim arraydeki döndüğümüz btnlerin textine eşitse o elemana class ekle

    if (tiklanmisButonunYazisi === btn.text) {
      buttonElement.classList.add("btn-dark", "text-white");
    }

    buttonElement.dataset.category = btn.value;

    buttonElement.innerText = btn.text;

    buttonArea.appendChild(buttonElement);
  });
}
