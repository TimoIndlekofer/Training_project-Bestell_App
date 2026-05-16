// ##### JavaScript file for scripts #####

const dialogBox = document.getElementById('basket-ordered-dialog-section');
const toggleDeliveryButton = document.getElementById('basket-order-delivery-toggle');
const mobileBasket = document.getElementById('mobile-basket');
const mobileOpenBasketButton = document.getElementById('mobile-open-basket-button');
const mobileCloseBasketButton = document.getElementById('basket-mobile-close-button');
const saveDeliverySetting = localStorage.getItem('delivery') === 'true';

let timeout;

function init() {
    renderCategories();
    renderCategoryData();

    loadDataFromLocalStorage();
    toggleDeliveryButtonCheck();
    renderBasket();

    mobileBasketFunction();
    updateBasketBadge();
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



function renderCategoryData() {
    for (let index = 0; index < category.length; index++) {
        renderMenus(category[index].menuID, category[index].name)
    }
}


function renderMenus(categoryID, categoryName) {
    const menuContainer = document.getElementById(categoryID);

    menuContainer.innerHTML = "";

    for (let menuIndex = 0; menuIndex < menu.length; menuIndex++) {
        const menuData = menu[menuIndex];

        if (menuData.category === categoryName) {
            const priceValue = renderPrice(menuData.price)
            menuContainer.innerHTML += getMenuData(menuData, priceValue);
        }       
    }
}


function articleAvailableInBasket(menuDataID, articleAvailable) {
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
}


function addMenuCardToBasket(menuDataID) {
    fullBasket();

    let articleAvailable = false;

    for (let articleIndex = 0; articleIndex < basket.length; articleIndex++) {
        if (basket[articleIndex].id == menuDataID) {
            basket[articleIndex].quantity += 1;
            articleAvailable = true;
            break;
        }
    }

    articleAvailableInBasket(menuDataID, articleAvailable);

    saveDataToLocalStorage();
    renderBasket();
    updateBasketBadge();
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
    saveDataToLocalStorage();
    renderBasket();
    updateBasketBadge();
}


function increaseQuantityInBasket(basketDataID) {
    for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
        if (basket[basketIndex].id == basketDataID) {
            basket[basketIndex].quantity += 1;
            break;
        }
    }
    saveDataToLocalStorage();
    renderBasket();
    updateBasketBadge();
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
    saveDataToLocalStorage();
    renderBasket();
    updateBasketBadge();
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
    localStorage.setItem('delivery', toggleDeliveryButton.checked);
    saveDataToLocalStorage();
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
    localStorage.removeItem('basket');

    toggleDeliveryButtonCheck();
    localStorage.setItem('delivery', 'false')
    toggleDeliveryButton.checked = false;

    dialogBox.showModal();

    timeout = setTimeout(() => {
        dialogBox.close();
    }, 5000);

    saveDataToLocalStorage();
    renderBasket();
    updateBasketBadge()
}


function closeDialog() {
    clearTimeout(timeout);
    dialogBox.close();
}


function toggleDeliveryButtonCheck() {
    if (toggleDeliveryButton) {
        toggleDeliveryButton.checked = saveDeliverySetting;
    }
}


function mobileBasketFunction() {
    if (mobileOpenBasketButton && mobileCloseBasketButton) {
        mobileOpenBasketButton.addEventListener('click', openMobileBasket);
        mobileCloseBasketButton.addEventListener('click', closeMobileBasket);
    }
}


function openMobileBasket() {
    mobileBasket.classList.add('is-open');
    document.documentElement.classList.add('basket-mobile-no-scrolling');
}


function closeMobileBasket() {
    mobileBasket.classList.remove('is-open');
    document.documentElement.classList.remove('basket-mobile-no-scrolling');
}


function updateBasketBadge() {
    const badgeContainer = document.getElementById('basket-badge-count');

    let basketQuantity = 0;

    for (let basketIndex = 0; basketIndex < basket.length; basketIndex++) {
        basketQuantity += basket[basketIndex].quantity;
    }

    if (basketQuantity > 0) {
        document.getElementById('basket-badge-count').style = 'display: flex';
        document.getElementById('basket-badge-count').innerText = basketQuantity;
    } else {
        document.getElementById('basket-badge-count').style = 'display: none';
    }
}


function openImpressum() {
    alert("Hinweis: Das ist ein reines Übungsprojekt zu Lernzwecken. Die Seite wird nicht öffentlich hochgeladen, weshalb kein rechtliches Impressum hinterlegt ist.");
}


function openCookiePreferences() {
    alert("Hinweis: Das ist ein reines Übungsprojekt zu Lernzwecken. Auf dieser Webseite werden keine echten Cookies oder Tracking-Daten gesammelt.");
}


function saveDataToLocalStorage() {
    let data = JSON.stringify(basket);

    localStorage.setItem('basketContent', data);
}


function loadDataFromLocalStorage() {
    let data = localStorage.getItem('basketContent');

    if (data) {
        basket = JSON.parse(data);
    }
}