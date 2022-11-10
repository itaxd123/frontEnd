$(document).ready(function () {
  const productsDOM = document.querySelector(".card-layout");
  const categoriasDOM = document.querySelector(".categories-nav");

  getCategories();
  getProducts();

  $("#findProduct").on("click", function (e) {
    e.preventDefault();
    var label = $("#labelProduct").val();
    $.ajax({
      method: "GET",
      url: "index.php",
      data: {
        controlador: "producto",
        accion: "findProduct",
        text: label,
      },
    }).done(function (response) {
      let result = "";
      response.forEach((products) => {
        result += ` 
        <div class="card-layout__item">
            <a class="card">
                <div class="thumb" style="background-image: url(${products.url_image});"></div>
                <article>
                <h4>${products.name}</h4>
                <span>Price: $ ${products.price}</span>
                <span>Discount: ${products.discount}</span>
                </article>
            </a>
        </div>
        `;
      });
      productsDOM.innerHTML = result;
    });
  });
  console.log("ready!");
  function getProducts() {
    $.ajax({
      method: "GET",
      url: "index.php",
      data: {
        controlador: "producto",
        accion: "getAll",
      },
    }).done(function (response) {
      let result = "";
      response.forEach((products) => {
        result += ` 
        <div class="card-layout__item">
            <a class="card">
                <div class="thumb" style="background-image: url(${products.url_image});"></div>
                <article>
                <h4>${products.name}</h4>
                <span>Price: $ ${products.price}</span>
                <span>Discount: ${products.discount}</span>
                </article>
            </a>
        </div>
        `;
      });
      productsDOM.innerHTML = result;
    });
  }
  function getCategories() {
    $.ajax({
      method: "GET",
      url: "index.php",
      data: {
        controlador: "categoria",
        accion: "getAll",
      },
    }).done(function (response) {
      let result = "";
      result += ` 
            <li class="nav-item ">
                <a class="nav-link" href="#" onclick="getProducts()">All</a>
            </li>
                      `;
      response.forEach((categories) => {
        result += ` 
            <li class="nav-item ">
                <a class="nav-link" href="#" onclick="getProductforCategory(${categories.id})">${categories.name}</a>
            </li>
                    `;
      });

      categoriasDOM.innerHTML = result;
    });
  }
});
function getProductforCategory(id) {
  const productsDOM = document.querySelector(".card-layout");
  $.ajax({
    method: "GET",
    url: "index.php",
    data: {
      controlador: "categoria",
      accion: "getProductforCategory",
      id: id,
    },
  }).done(function (response) {
    let result = "";
    response.forEach((products) => {
      result += ` 
        <div class="card-layout__item">
            <a href="#" class="card">
                <div class="thumb" style="background-image: url(${products.url_image});"></div>
                <article>
                <h4>${products.name}</h4>
                <span>Price: $ ${products.price}</span>
                <span>Discount: ${products.discount}</span>
                </article>
            </a>
        </div>
        `;
    });
    productsDOM.innerHTML = result;
  });
}
