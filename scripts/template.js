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
                            <button class="add-button">
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