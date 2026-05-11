// ##### JavaScript template file #####

function getMenuData(menuData, priceValue) {
    return `<article class="menu-card">

                    <div class="menu-card-image">
                        <img src="${menuData.image}" alt="Menu article picture">
                    </div>
                    <div class="menu-card-content">
                        <div class="menu-card-header">
                            <h3>${menuData.name}</h3>
                            <span class="menu-card-price">${priceValue}</span>
                        </div>
                        <p class="menu-card-description">
                            ${menuData.description}
                        </p>
                        <div class="add-button-container">
                            <button class="add-button" onclick="addMenuCardToBasket(${menuData.id})">
                                <span>Hinzufügen</span>
                                <span>+</span>
                            </button>
                        </div>
                    </div>
                </article>`
}


function getCategoryData(categoryData) {
    return `<div class="category-container" id="${categoryData.categoryID}">
                <img src="${categoryData.image}" alt="Category picture">
                <h2>${categoryData.name}</h2>
            </div>

            <div class="all-menu-cards" id="${categoryData.menuID}"></div>`
}


function getBasketData(basketData) {
    let articlePrice = basketData.price * basketData.quantity;

    return `<li class="basket-card">
                            <div class="basket-card-header">
                                <h3>${basketData.name}</h3>
                            </div>

                            <div class="basket-card-data">
                                <button class="basket-card-quantity-button" onclick="reduceQuantityInBasket(${basketData.id})">-</button>
                                <p><span class="basket-card-quantity">${basketData.quantity}</span> x</p>
                                <button class="basket-card-quantity-button" onclick="increaseQuantityInBasket(${basketData.id})">+</button>
                                <span class="basket-card-price" id="article-price">${articlePrice.toFixed(2).replace('.', ',') + " €"}</span>
                                <button class="basket-card-trash-button" onclick="removeMenuCardFromBasket(${basketData.id})"><img src="./assets/icons/trashcan.png" alt="Trashcan icon"></button>
                            </div>
                        </li>`
}