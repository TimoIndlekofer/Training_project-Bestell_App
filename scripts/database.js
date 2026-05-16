// ##### JavaScript database file #####


let category = [
    {
        "categoryID": "category-drinks",
        "image": "./assets/img/category_drinks.jpg",
        "menuID": "menu-drinks",
        "name": "Getränke"
    },
    {
        "categoryID": "category-appetizers",
        "image": "./assets/img/category_appetizers.jpg",
        "menuID": "menu-appetizers",
        "name": "Vorspeisen"
    },
    {
        "categoryID": "category-main-dishes",    
        "image": "./assets/img/category_main_dishes.png",
        "menuID": "menu-main-dishes",
        "name": "Hauptspeisen"
    },
    {
        "categoryID": "category-desserts",
        "image": "./assets/img/category_desserts.jpg",
        "menuID": "menu-desserts",
        "name": "Nachspeisen"
    },
    {
        "categoryID": "category-side-dishes",
        "image": "./assets/img/category_side_dishes.jpg",
        "menuID": "menu-side-dishes",
        "name": "Beilagen"
    }
]


let menu = [
    {
        "id": 101,
        "image": "./assets/img/menu/water.jpg",
        "name": "Mineralwasser",
        "category": "Getränke",
        "price": 2.50,
        "description": "Stilles oder prickelndes Mineralwassser (0,5L Flasche)" 
    },
    {
        "id": 102,
        "image": "./assets/img/menu/cola.jpg",
        "name": "Cola / Spezi / Fanta",
        "category": "Getränke",
        "price": 3.20,
        "description": "Cola, Spezi oder Fanta (0,33L Flasche)"   
    },
    {
        "id": 103,
        "image": "./assets/img/menu/lemonade.jpg",
        "name": "Hausgemachte Limonade",
        "category": "Getränke",
        "price": 4.50,
        "description": "Köstliche, hausgemachte Limonade (0,5L Flasche)"
    },
    {
        "id": 104,
        "image": "./assets/img/menu/beer.jpg",
        "name": "Bier",
        "category": "Getränke",
        "price": 3.80,
        "description": "Alkoholhaltiges oder alkholfreies, helles Bier (0,33L Flasche)" 
    },
    {
        "id": 105,
        "image": "./assets/img/menu/wine.jpg",
        "name": "Wein",
        "category": "Getränke",
        "price": 7.00,
        "description": "Weiß- oder Rotwein (0,75L Flasche)" 
    },
    {
        "id": 201,
        "image": "./assets/img/menu/green_salad.jpg",
        "name": "Grüner Salat",
        "category": "Vorspeisen",
        "price": 3.50,
        "description": "Grüner Blattsalat in Essig-Öl-Dressing" 
    },
    {
        "id": 202,
        "image": "./assets/img/menu/mixed_salad.jpg",
        "name": "Gemischter Salat",
        "category": "Vorspeisen",
        "price": 5.50,
        "description": "Gemischter Blattsalat mit Karotten, Mais, Kraut und Kartoffelsalat in Essig-Öl-Dressing" 
    },
    {
        "id": 203,
        "image": "./assets/img/menu/cucumber-salad.jpg",
        "name": "Gurkensalat",
        "category": "Vorspeisen",
        "price": 3.80,
        "description": "Feine Gurkenscheiben in einem klassischen Dill-Essig-Dressing" 
    },
    {
        "id": 204,
        "image": "./assets/img/menu/spring_rolls.jpg",
        "name": "Frühlingsrollen",
        "category": "Vorspeisen",
        "price": 4.50,
        "description": "Vegetarisch gefüllt mit süß-sauer Sauce (3 Stück)" 
    },
    {
        "id": 205,
        "image": "./assets/img/menu/quiches.jpg",
        "name": "Mini-Quiches",
        "category": "Vorspeisen",
        "price": 8.50,
        "description": "Kleine, vegetarische Törtchen (3 Stück)" 
    },
    {
        "id": 301,
        "image": "./assets/img/menu/hamburger.jpg",
        "name": "Hamburger",
        "category": "Hauptspeisen",
        "price": 12.50,
        "description": "Burgerbans, 200g Rindfleisch, Salat, Gewürzgurkenscheiben, Tomatenscheiben mit Burgersauce" 
    },
    {
        "id": 302,
        "image": "./assets/img/menu/cheeseburger.png",
        "name": "Cheeseburger",
        "category": "Hauptspeisen",
        "price": 14.50,
        "description": "Burgerbans mit Sesamkörner, 200g Rindfleisch, 2 Scheiben Cheddar, Salat, Gewürzgurkenscheiben, Tomatenscheiben mit Burgersauce"
    },
    {
        "id": 303,
        "image": "./assets/img/menu/pizza.jpg",
        "name": "Pizza",
        "category": "Hauptspeisen",
        "price": 12.00,
        "description": "Überraschungspizza nach Art des Hauses (30 cm)" 
    },
    {
        "id": 304,
        "image": "./assets/img/menu/pommes_schnitzel.jpg",
        "name": "Schnitzel mit Pommes",
        "category": "Hauptspeisen",
        "price": 18.50,
        "description": "Rindfleischschnitzel mit Pommes, Reis oder Salat" 
    },
    {
        "id": 305,
        "image": "./assets/img/menu/curry.jpg",
        "name": "Vegetarisches Curry",
        "category": "Hauptspeisen",
        "price": 12.50,
        "description": "Saisonnales Gemüse in Curry-Sauce mit Reis" 
    },
    {
        "id": 401,
        "image": "./assets/img/menu/ice.jpg",
        "name": "Eisbecher",
        "category": "Nachspeisen",
        "price": 7.00,
        "description": "Vanilleeis mit Himbeeren (3 Kugeln)" 
    },
    {
        "id": 402,
        "image": "./assets/img/menu/yoghurt.jpg",
        "name": "Joghurtbecher",
        "category": "Nachspeisen",
        "price": 5.00,
        "description": "Mit cremigen Waldhonig und Walnüssen" 
    },
    {
        "id": 403,
        "image": "./assets/img/menu/waffles.jpg",
        "name": "Frische Waffeln",
        "category": "Nachspeisen",
        "price": 4.80,
        "description": "Vanilleeis mit Himbeeren (3 Kugeln)" 
    },
    {
        "id": 404,
        "image": "./assets/img/menu/cake.jpg",
        "name": "Kuchen",
        "category": "Nachspeisen",
        "price": 5.30,
        "description": "Frischer Erdbeer- oder Kirschkuchen (1 Stück)" 
    },
    {
        "id": 405,
        "image": "./assets/img/menu/backed_banana.jpg",
        "name": "Gebackene Banane",
        "category": "Nachspeisen",
        "price": 5.50,
        "description": "In Teigmantel ausgebackene, mit Honig und Sesam verfeinerte Bananenstücke (7 Stücke)" 
    },
    {
        "id": 501,
        "image": "./assets/img/menu/pommes.jpg",
        "name": "Portion Pommes",
        "category": "Beilagen",
        "price": 3.80,
        "description": "Goldgelb und knusprig frittiert, mit Ketchup oder Mayo" 
    },
    {
        "id": 502,
        "image": "./assets/img/menu/potatos.jpg",
        "name": "Kleine Kartoffeln",
        "category": "Beilagen",
        "price": 4.50,
        "description": "Kleine Kartoffeln mit frischen Kräutern" 
    },
    {
        "id": 503,
        "image": "./assets/img/menu/backed_potato.jpg",
        "name": "Überbackene Kartoffeln",
        "category": "Beilagen",
        "price": 4.80,
        "description": "Überbackene Kartoffeln mit Käse" 
    },
    {
        "id": 504,
        "image": "./assets/img/menu/noodle.jpg",
        "name": "Portion Nudeln",
        "category": "Beilagen",
        "price": 3.80,
        "description": "Gekochte Nudeln ohne Soße" 
    },
    {
        "id": 505,
        "image": "./assets/img/menu/rice.jpg",
        "name": "Portion Reis",
        "category": "Beilagen",
        "price": 3.50,
        "description": "Locker gedämpfter Reis" 
    }
]


let basket = [];