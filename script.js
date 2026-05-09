// ##### JavaScript file for scripts #####

function init() {
    // renderMenu();

    renderCategories();

    renderDrinks();
    renderAppetizers();
    renderMainDishes();
    renderDesserts();
    renderSideDishes();
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


// function renderMenu() {
//     const menuContainer = document.getElementById('menu-drinks');
//     menuContainer.innerHTML = "";

//     let menuContent = "";

//     for (let menuIndex = 0; menuIndex < menu.length; menuIndex++) {
//         const menuData = menu[menuIndex];

//         menuContent += getMenuData(menuData);        
//     }

//     menuContainer.innerHTML = menuContent;
// }


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