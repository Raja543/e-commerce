// Define an array of products
var products = [
  { name: "Quis Nostrud Exercitation ", price: 150 },
  { name: "Quis Nostrud Exercitation ", price: 450 },
  { name: "Quis Nostrud Exercitation ", price: 250 },
  { name: "Quis Nostrud Exercitation ", price: 780 },
  { name: "Quis Nostrud Exercitation ", price: 425 },
  { name: "Quis Nostrud Exercitation ", price: 825 },
  { name: "Quis Nostrud Exercitation ", price: 785 },
  { name: "Quis Nostrud Exercitation ", price: 540 },
];

// Define the sorting function
function sortByPrice(a, b) {
  if (a.price < b.price) {
    return -1;
  } else if (a.price > b.price) {
    return 1;
  } else {
    return 0;
  }
}

// Sort the products by price
products.sort(sortByPrice);

// Display the sorted list of products
for (var i = 0; i < products.length; i++) {
  console.log(products[i].name + " - ₹" + products[i].price);
}
