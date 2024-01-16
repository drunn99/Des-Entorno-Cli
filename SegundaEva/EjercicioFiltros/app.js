cargarProductos(products);
actualizarListadoCompany(products)

//Input text
let input = document.getElementsByClassName("search-input")[0];
input.addEventListener("input", () => {
    ocultarProductos(input.value);
})

//Input buttons
let companyInput = document.getElementsByClassName("company-btn");
[...companyInput].forEach(btn => {
    btn.addEventListener("click", (ev) => {
        filtrarProductosCompany(btn.textContent);
    })
});

function ocultarProductos(title) {
    let products = document.querySelectorAll(".product");
    [...products].forEach(element => {
        let currentTitle = element.childNodes[1].childNodes[0].innerText.toUpperCase();
        if (currentTitle.indexOf(title.toUpperCase()) == -1) {
            element.style["display"] = "none";
        } else {
            element.style["display"] = "";
        }
    })
}

function filtrarProductosCompany(company) {
    let products = document.querySelectorAll(".product");
    [...products].forEach(element => {
        let currentComp = element.getElementsByClassName("product-comp")[0];
        if (currentComp.innerHTML == company.toLowerCase() || company == "All") {
            element.style["display"] = "";
        } else {
            element.style["display"] = "none";
        }
    })
}

function cargarProductos(products) {
    products.forEach(element => {
        let newProduct = document.createElement("article");
        newProduct.setAttribute("class", "product");
        let productImage = document.createElement("img");
        productImage.setAttribute("src", element.image);
        productImage.setAttribute("class", "product-img img");
        let footer = document.createElement("footer");
        footer.innerHTML = `<h5 class="product-name">${element.title}</h5>
        <span class="product-price">${element.price}</span>
        <span class="product-comp"style="display: none">${element.company}</span>`;
        newProduct.appendChild(productImage);
        newProduct.appendChild(footer)
        document.getElementsByClassName("products-container")[0].appendChild(newProduct);
    });
}

function actualizarListadoCompany(products) {
    let listado = document.getElementsByClassName("companies")[0];
    let listaCompanys = [];
    products.forEach(element => {
        if (listaCompanys.indexOf(element.company) == -1) {
            let newButton = document.createElement("button");
            newButton.setAttribute("class", "company-btn");
            newButton.innerHTML = element.company;
            listaCompanys.push(element.company);
            listado.appendChild(newButton);
        }
    })
}