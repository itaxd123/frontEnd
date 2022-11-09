$( document ).ready(function() {

const productsDOM = document.querySelector('.card-layout');
const categoriasDOM = document.querySelector('.categories-nav');
getCategories();
getProducts();

function getCategories() {
    $.ajax({
        method: "POST",
        url: "index.php",
        data: {
            "controlador": "categoria",
            "accion": 'getAll'
        }
    }).done(function(product) {
        json = JSON.parse(product);
        let result = "";
        result += ` 
            <li class="nav-item ">
                <a class="nav-link" href="#" onclick="getProducts()">All</a>
            </li>
                      `;
        json.forEach((categories) => {
            result += ` 
            <li class="nav-item ">
                <a class="nav-link" href="#" onclick="getProductforCategory(${categories.id})">${categories.name}</a>
            </li>
                    `;
        });

        categoriasDOM.innerHTML = result;
    });
}

function getProducts() {
    $.ajax({
        method: "POST",
        url: "index.php",
        data: {
            "controlador": "producto",
            "accion": 'getAll'
        }
    }).done(function(product) {
        json = JSON.parse(product);
        let result = "";
        json.forEach((products) => {
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
$('#findProduct').on('click', function(e) {
    e.preventDefault();
    var label = $('#labelProduct').val();
    $.ajax({
        method: "POST",
        url: "index.php",
        data: {
            "controlador": "producto",
            "accion": 'findProduct',
            "text": label
        }
    }).done(function(product) {
        json = JSON.parse(product);
        let result = "";
        json.forEach((products) => {
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

function getProductforCategory(id) {
    $.ajax({
        method: "POST",
        url: "index.php",
        data: {
            "controlador": "categoria",
            "accion": 'getProductforCategory',
            "id": id
        }
    }).done(function(product) {

        json = JSON.parse(product);
        let result = "";
        console.log(json);

        json.forEach((products) => {

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
console.log( "ready!" );
});