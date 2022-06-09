let button = document.querySelector("#order");

let panier = []
let panierLocalStorage = JSON.parse(localStorage.getItem("produit"));
total();

if (!panierLocalStorage) {

    let titleCart = document.querySelector("h1");
    let sectionCart = document.querySelector(".cart");

    titleCart.innerHTML = "Votre panier est vide";
    sectionCart.style.display = "none";

} else {

    for (let i=0; i < panierLocalStorage.length; i++){ 
        panier.push(panierLocalStorage);

        // Création de l'élément "article"
        let cartItems = document.getElementById("cart__items");
        let cartItem = document.createElement("article");
        cartItem.classList.add("cart__item");
        cartItems.appendChild(cartItem);
        
        // Création de l'élément "img"
        let cartImg = document.createElement("div");
        cartImg.classList.add("cart__item__img");
        let img = document.createElement("img");
        imgsrc = panierLocalStorage[i].imgsrc;
        imgalt = panierLocalStorage[i].imgalt;
        cartImg.appendChild(img);
        cartItem.appendChild(cartImg);
        
        // Création des éléments "description" pour le nom, la couleur et le prix 
        let cartContent = document.createElement("div");
        cartContent.classList.add("cart__item__content");
        cartItem.appendChild(cartContent);

        let cartContentDescription = document.createElement("div");
        cartContentDescription.classList.add("cart__item__content__description")
        cartContent.appendChild(cartContentDescription)
        let productName = document.createElement("h2");
        let productInfo = document.createElement("p");
        let productPrice = document.createElement("p")
        productName.textContent = panierLocalStorage[i].name;
        productInfo.textContent = panierLocalStorage[i].color;
        productPrice.textContent = panierLocalStorage[i].price + "€";
        cartContentDescription.appendChild(productName);
        cartContentDescription.appendChild(productInfo);
        cartContentDescription.appendChild(productPrice)

        // Création des éléments "settings" pour la quantité et la suppression
        let settings = document.createElement("div");
        settings.classList.add("cart__item__content__settings");
        cartItem.appendChild(settings);

        let settingsQty = document.createElement("div");
        settingsQty.classList.add("cart__item__content__settings__quantity");
        settings.appendChild(settingsQty);

        let qty = document.createElement("p");
        settingsQty.appendChild(qty);
        qty.textContent = "Qté : "

        let qtyNumber = document.createElement("input");
        qtyNumber.classList.add("itemQuantity");
        settingsQty.appendChild(qtyNumber);
        qtyNumber.setAttribute("type", "number");
        qtyNumber.setAttribute("min", "1");
        qtyNumber.setAttribute("max", "100");
        qtyNumber.setAttribute ("value", panierLocalStorage[i].quantity)

        let settingsDelete = document.createElement("div");
        settingsDelete.classList.add("cart__item__content__settings__delete");
        settings.appendChild(settingsDelete);

        let deleteItem = document.createElement("p");
        deleteItem.classList.add("deleteItem");
        settingsDelete.appendChild(deleteItem);
        deleteItem.textContent = "Supprimer";
        deleteItem.addEventListener("click", () => {

    })

    }
} 

function total() {
    for (let i=0; i < panierLocalStorage; i++){
    let cartPrice = document.querySelector("cart__price");
    let qty = panierLocalStorage[i].quantity
    let totalQty = document.querySelector("totalQuantity");
    }

}