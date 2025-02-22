<!-- // Fetch this way  -->
function showRandomRecipes() {
     console.log('hello')
}

<!-- fetch the modern way -->
const DEFAULT_RECIPES = 10;

const showRandomRecipes = (numRecipes = DEFAULT_RECIPES) => {
    console.log(numRecipes);
};
showRandomRecipes();



<!-- Array -->
[]

<!-- not the best solution -->
*****innerHTML******


import { BASE_URL } from './info.js';
const DEFAULT_RECIPES = 10;


const showRandomRecipes = (numRecipes = DEFAULT_RECIPES) => {

    let recipesLIst = '';
    for (let index = 0; index < numRecipes; index++) {
        // fetching the API
        fetch(`${BASE_URL}/random.php`)
        .then(response => response.json())
        // if everythin is fine - show 
        .then(data => {
            data = data.meals[0];
            recipesLIst += `
                <article>
                    <header>
                        <h2>${data.strMeal}</h2>
                    </header>
                    <img src="${data.strMealThumb}/preview" alt="${data.strMeal}">
                    <div>
                        <p class="pill">${data.strCategory}</p>
                        <p class="pill">${data.strArea}</p>
                    </div>
                </article>
            `;
        })
        // if everythin is fine - show 
        .catch(error => console.log(error))

        document.querySelector('#recipes-list').innerHTML = recipesLIst;
    }
};

showRandomRecipes();


<!-- The correct method: -->
import { BASE_URL } from './info.js';
const DEFAULT_RECIPES = 10;


const showRandomRecipes = async (numRecipes = DEFAULT_RECIPES) => {

    let recipesLIst = '';
    for (let index = 0; index < numRecipes; index++) {
        // fetching the API
        await fetch(`${BASE_URL}/random.php`)
        .then(response => response.json())
        // if everythin is fine - show 
        .then(data => {
            data = data.meals[0];
            recipesLIst += `
                <article>
                    <header>
                        <h2>${data.strMeal}</h2>
                    </header>
                    <img src="${data.strMealThumb}/preview" alt="${data.strMeal}">
                    <div>
                        <p class="pill">${data.strCategory}</p>
                        <p class="pill">${data.strArea}</p>
                    </div>
                </article>
            `;
        })
        // if everythin is fine - show 
        .catch(error => console.log(error))

        document.querySelector('#recipes-list').innerHTML = recipesLIst;
    }
};

showRandomRecipes();




<!-- .append() -->
https://developer.mozilla.org/en-US/docs/Web/API/Element/append

<!-- Appending an element -->
let div = document.createElement("div");
let p = document.createElement("p");
div.append(p);

console.log(div.childNodes); // NodeList [ <p> ]



<!-- Appending text -->
let div = document.createElement("div");
div.append("Some text");

console.log(div.textContent); // "Some text"


<!-- Appending an element and text -->
let div = document.createElement("div");
let p = document.createElement("p");
div.append("Some text", p);

console.log(div.childNodes); // NodeList [ #text "Some text", <p> ]






<!-- DOOOOO NOOOOOT USSSEEEE -->
// const showRandomRecipesWithInnerHTML = async (numRecipes = DEFAULT_RECIPES) => {

//     let recipesLIst = '';
//     for (let index = 0; index < numRecipes; index++) {
//         // fetching the API
//         await fetch(`${BASE_URL}/random.php`)
//         .then(response => response.json())
//         // if everythin is fine - show 
//         .then(data => {
//             data = data.meals[0];
//             recipesLIst += `
//                 <article>
//                     <header>
//                         <h2>${data.strMeal}</h2>
//                     </header>
//                     <img src="${data.strMealThumb}/preview" alt="${data.strMeal}">
//                     <div>
//                         <p class="pill">${data.strCategory}</p>
//                         <p class="pill">${data.strArea}</p>
//                     </div>
//                 </article>
//             `;
//         })
//         // if everythin is fine - show 
//         .catch(error => console.log(error))

//         document.querySelector('#recipes-list').innerHTML = recipesLIst;
//     }
// };

// Correct way
// const showRandomRecipesCreateElement = async (numRecipes = DEFAULT_RECIPES) => {

//     const fragment = document.createDocumentFragment();
//     for (let index = 0; index < numRecipes; index++) {

//         await fetch(`${BASE_URL}/random.php`)
//         .then(response => response.json())
//         .then(data => {
//             data = data.meals[0];

//             const h2 = document.createElement('h2');
//             h2.innerText = data.strMeal;

//             const header = document.createElement('header');
//             header.append(h2);

//             const img = document.createElement('img');
//             img.setAttribute('src', `data.strMealThumb/preview`)
//             img.setAttribute('alt', data.strMeal);

//             const pCategory = document.createElement('p');
//             pCategory.classList.add('pill');
//             pCategory.innerText = meal.strCategory;

//             const pArea = document.createElement('p');
//             pArea.classList.add('pill');
//             pArea.innerText = meal.strArea;

//             p.innerText = meal.strArea;

//             const div = document.createElement('div');
//             div.append(pCategory);
//             div.append(pArea);

//             const article = document.createElement('article');
//             article.append(header);
//             article.append(img);
//             article.append(div);

//             fragment.append(article);

//         })
//         .catch(error => console.log(error))

//         document.querySelector('#recipes-list').innerHTML = recipesLIst;
//     }
// };

// showRandomRecipes();

// const showRandomRecipesWithInnerHTML = async (numRecipes = DEFAULT_RECIPES) => {

//     let recipesLIst = '';
//     for (let index = 0; index < numRecipes; index++) {
//         // fetching the API
//         await fetch(`${BASE_URL}/random.php`)
//         .then(response => response.json())
//         // if everythin is fine - show 
//         .then(data => {
//             data = data.meals[0];
//             recipesLIst += `
//                 <article>
//                     <header>
//                         <h2>${data.strMeal}</h2>
//                     </header>
//                     <img src="${data.strMealThumb}/preview" alt="${data.strMeal}">
//                     <div>
//                         <p class="pill">${data.strCategory}</p>
//                         <p class="pill">${data.strArea}</p>
//                     </div>
//                 </article>
//             `;
//         })
//         // if everythin is fine - show 
//         .catch(error => console.log(error))

//         document.querySelector('#recipes-list').innerHTML = recipesLIst;
//     }
// };

// showRandomRecipes();

