// ##### JavaScript file for scripts #####

const dialogBox = document.getElementById('basket-ordered-dialog-section');
const toggleDeliveryButton = document.getElementById('basket-order-delivery-toggle');
let timeout;

function init() {
    renderCategories();

    renderDrinks();
    renderAppetizers();
    renderMainDishes();
    renderDesserts();
    renderSideDishes();

    renderBasket();
}


function renderCategories() {
    const categoryAndMenuContainer = document.getElementById('category-menu-section');
    categoryAndMenuContainer.innerHTML = "";

    let categoryAndMenu = "";

    for (let index = 0; index < category.length; index++) {
        const categoryData = category[index];

        categoryAndMenu += getCategoryData(categoryData);
    }
    categoryAndMenuContainer.innerHTML = categoryAndMenu;
}


function renderPrice(value) {
    return value.toFixed(2).replace('.', ',') + " €";
}


function renderDrinks() {
    const menuContainerDrinks = document.getElementById('menu-drinks');
    menuContainerDrinks.innerHTML = "";

    let menuContentDrinks = "";

    for (let menuIndex = 0; menuIndex < menu.length; menuIndex++) {
        const menuData = menu[menuIndex];

        if (menuData.category === "Getränke") {
            const priceValue = renderPrice(menuData.price)
            menuContentDrinks += getMenuData(menuData, priceValue);
        }       
    }
    menuContainerDrinks.innerHTML = menuContentDrinks;
}


function renderAppetizers() {
    const menuContainerAppetizers = document.getElementById('menu-appetizers');
    menuContainerAppetizers.innerHTML = "";

    let menuContentAppetizers = "";

    for (let menuIndex = 0; menuIndex < menu.length; menuIndex++) {
        const menuData = menu[menuIndex];

        if (menuData.category === "Vorspeise") {
            const priceValue = renderPrice(menuData.price)
            menuContentAppetizers += getMenuData(menuData, priceValue);
        }       
    }
    menuContainerAppetizers.innerHTML = menuContentAppetizers;
}


function renderMainDishes() {
    const menuContainerMainDishes = document.getElementById('menu-main-dishes');
    menuContainerMainDishes.innerHTML = "";

    let menuContentMainDishes = "";

    for (let menuIndex = 0; menuIndex < menu.length; menuIndex++) {
        const menuData = menu[menuIndex];

        if (menuData.category === "Hauptspeise") {
            const priceValue = renderPrice(menuData.price)
            menuContentMainDishes += getMenuData(menuData, priceValue);
        }       
    }
    menuContainerMainDishes.innerHTML = menuContentMainDishes;
}


function renderDesserts() {
    const menuContainerDesserts = document.getElementById('menu-desserts');
    menuContainerDesserts.innerHTML = "";

    let menuContentDesserts = "";

    for (let menuIndex = 0; menuIndex < menu.length; menuIndex++) {
        const menuData = menu[menuIndex];

        if (menuData.category === "Nachspeise") {
            const priceValue = renderPrice(menuData.price)
            menuContentDesserts += getMenuData(menuData, priceValue);
        }       
    }
    menuContainerDesserts.innerHTML = menuContentDesserts;
}


function renderSideDishes() {
    const menuContainerSideDishes = document.getElementById('menu-side-dishes');
    menuContainerSideDishes.innerHTML = "";

    let menuContentSideDishes = "";

    for (let menuIndex = 0; menuIndex < menu.length; menuIndex++) {
        const menuData = menu[menuIndex];

        if (menuData.category === "Beilagen") {
            const priceValue = renderPrice(menuData.price)
            menuContentSideDishes += getMenuData(menuData, priceValue);
        }       
    }
    menuContainerSideDishes.innerHTML = menuContentSideDishes;
}


function addMenuCardToBasket(menuDataID) {
    // let basketContent = "";
    fullBasket();

    let articleAvailable = false;

    for (let articleIndex = 0; articleIndex < basket.length; articleIndex++) {
        if (basket[articleIndex].id == menuDataID) {
            basket[articleIndex].quantity += 1;
            articleAvailable = true;
            break;
        }
    }

    if (!articleAvailable) {
        for (let basketIndex = 0; basketIndex < menu.length; basketIndex++) {
            if (menu[basketIndex].id == menuDataID) {
                let basketData = {
                    id: menu[basketIndex].id,
                    name: menu[basketIndex].name,
                    quantity: 1,
                    price: menu[basketIndex].price
                }
                basket.push(basketData);
                break;
            } 
        }
    }
    renderBasket();
}


function removeMenuCardFromBasket(basketDataID) {
    for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
        if (basket[basketIndex].id == basketDataID) {
            basket.splice(basketIndex, 1);
            break;
        }
    }

    if (basket.length === 0) {
        emptyBasket();
    }
    renderBasket();
}


function increaseQuantityInBasket(basketDataID) {
    for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
        if (basket[basketIndex].id == basketDataID) {
            basket[basketIndex].quantity += 1;
            break;
        }
    }
    renderBasket();
}


function reduceQuantityInBasket(basketDataID) {
    for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
        if (basket[basketIndex].id == basketDataID) {
            basket[basketIndex].quantity -= 1;

            if (basket[basketIndex].quantity <= 0) {
                basket.splice(basketIndex, 1);
            }
            break;
        }
    }
    renderBasket();
}


function renderBasket() {
    if (basket.length === 0) {
        emptyBasket();
        return;
    } else {
        fullBasket();
    }

    calculateSubtotal();
    calculateTotal();

    let basketContent = "";
    
    for (let i = 0; i < basket.length; i++) {
        basketContent += getBasketData(basket[i]);
    }
    document.getElementById('basket-article-list').innerHTML = basketContent; 
}


function fullBasket() {
    document.getElementById('basket-empty-section').style = 'display: none';
    document.getElementById('basket-order-switch-button-section').style = 'display: flex';
    document.getElementById('basket-calculation-section').style = 'display: flex';
}


function emptyBasket() {
    document.getElementById('basket-empty-section').style = 'display: flex';
    document.getElementById('basket-article-list').innerHTML = "";
    document.getElementById('basket-order-switch-button-section').style = 'display: none';
    document.getElementById('basket-calculation-section').style = 'display: none';
}


function toggleDelivery() {
    renderBasket();
}


function calculateSubtotal() {
    const subtotalContainer = document.getElementById('basket-calculation-subtotal');
    subtotalContainer.innerHTML = "";
    
    let subtotalValue = 0;

    for (let index = 0; index < basket.length; index++) {
        subtotalValue += basket[index].price * basket[index].quantity;
    }
    subtotalContainer.innerHTML = subtotalValue;
    document.getElementById('basket-calculation-subtotal').innerText = subtotalValue.toFixed(2).replace('.', ',') + " €";
    return subtotalValue;
}


function calculateTotal() {
    const totalContainer = document.getElementById('basket-calculation-total');
    totalContainer.innerHTML = "";

    let subtotalValue = calculateSubtotal();
    let delivery = document.getElementById('basket-order-delivery-toggle').checked;
    let deliveryCost = delivery ? 5.00 : 0.00;
    
    let totalValue = subtotalValue + deliveryCost;
    totalContainer.innerHTML = totalValue;
    document.getElementById('basket-calculation-delivery-cost').innerText = deliveryCost.toFixed(2).replace('.', ',') + " €";
    document.getElementById('basket-calculation-total').innerText = totalValue.toFixed(2).replace('.', ',') + " €";
    document.getElementById('basket-calculation-total-button').innerText = totalValue.toFixed(2).replace('.', ',') + " €"
    return totalValue;
}


function openDialog() {
    basket = [];
    clearTimeout(timeout);

    if (toggleDeliveryButton) {
        toggleDeliveryButton.checked = false;
    }

    dialogBox.showModal();

    timeout = setTimeout(() => {
        dialogBox.close();
    }, 5000);

    renderBasket();
}


function closeDialog() {
    clearTimeout(timeout);
    dialogBox.close();
}