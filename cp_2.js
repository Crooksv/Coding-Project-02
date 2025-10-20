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
