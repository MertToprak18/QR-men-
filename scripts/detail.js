//* URL'den gelen arama parametresine ulaşmam gerekiyor
//* bu parametreye ulaşmak için js'in kendi hazırlamış olduğu bir class var
//* URLSearchParams

const params = new URLSearchParams(location.search);

const paramId = params.get("id");

document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("../db.json");
  const data = await response.json();

  const product = data.menu.find((item) => item.id === Number(paramId));

  renderDetailPage(product);
});

const outlet = document.getElementById("outlet");

function renderDetailPage(product) {
  outlet.innerHTML = `
    <div class="d-flex justify-content-between fs-5">
        <a href="/">
             <img style="width: 40px" src="./images/home.png" alt="" />
        </a>

    <div>anasayfa / ${product.category} / ${product.title}</div>
  </div>

  <h1 class="text-center my-3 shadow p-2 rounded">${product.title}</h1>

  <img
    class="rounded object-fit-cover shadow-lg"
    style="max-height: 400px"
    src=${product.img}
    alt=""
  />
  <h3 class="mt-4">
    Ürünün Kategorisi: <span class="text-success">${product.category}</span>
  </h3>

  <h3 class="my-4">
    Ürünün Fiyatı: <span class="text-success">${(product.price * 35).toFixed(
      2
    )}₺</span>
  </h3>

  <p class="lead fs-3">
  ${product.desc}
  </p>
    `;
}
