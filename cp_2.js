//Coding Project 02
//Vincent Crooks

const API_URL = 'https://www.course-api.com/javascript-store-products';

function fetchProductsThen() {
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      data.slice(0, 5).forEach((product) => {
        console.log(product.fields.name);
      });
    })
    .catch(handleError);
}

function handleError(error) {
  console.error('Oops! Something went wrong:', error.message || error);
}

//committed step 3

async function fetchProductsAsync() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    displayProducts(data);
  } catch (err) {
    handleError(err);
  }
}

//step 4 done

function displayProducts(products) {
  const box = document.querySelector('#product-container');
  if (!box) return;
  box.innerHTML = '';

  products.slice(0, 5).forEach((p) => {
    const name = p.fields.name;
    const img = p.fields.image[0].url;
    const price = (p.fields.price / 100).toFixed(2);

    const card = document.createElement('article');
    card.className = 'card';
    card.innerHTML = `
      <img src="${img}" alt="${name}" />
      <div class="name">${name}</div>
      <div class="price">$${price}</div>
    `;
    box.appendChild(card);
  });
}

fetchProductsThen();
fetchProductsAsync();
