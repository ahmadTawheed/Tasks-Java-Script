// name , category , price , instock , rating
const products = [
{ name: "Laptop", category: "Electronics", price: 25000, inStock: true, rating: 4.7 },
{ name: "Smartphone", category: "Electronics", price: 15000, inStock: false, rating: 4.2 },
{ name: "smart Watch", category: "Electronics", price: 900, inStock: true, rating: 4.5 },
{ name: "Headphones", category: "Electronics", price: 800, inStock: true, rating: 3.9 },
{ name: "T-shirt", category: "Clothing", price: 350, inStock: true, rating: 4.1 },
{name: "Sneakers", category: "clothing", price: 900, inStock: false, rating: 4.6 },
{ name: "Jacket", category: "Clothing", price: 1200, inStock: true, rating: 4.8 },
{ name: "Backpack", category: "Accessories", price: 500, inStock: true, rating: 4.3 },
{ name: "Sunglasses", category: "Accessories", price: 700, inStock: false, rating: 3.7 },
];

function titleSection(X, titleApp) {
    console.log(X, titleApp);
}
const cor = "✅";
const rat = "⭐";
const con = "EGP";

// filter (1) => product instock ?
const filterProduct = products.filter((product) => product.inStock === true);
// console.log(filterProduct);
// Show Availabel Product
titleSection("🟢","Available products");
filterProduct.forEach((productAv, i) => {
     console.log(`${i + 1} : ${productAv.name} :- \n ${cor} ${productAv.price} ${con} \n ${cor} ${rat} ${productAv.rating}`);
    });
console.log(`----------------------------------------------------`);

// filter (2) => product instock ?
const filterPrice = products.filter((product) => product.price < 1000);
// console.log(filterPrice);
// Show Price < 1000
titleSection("💰","Price less than 1000 EGP");
filterPrice.forEach((productAv, i) => {
     console.log(`${i + 1} : ${productAv.name} :- \n ${cor} ${productAv.price} ${con} \n ${cor} ${rat} ${productAv.rating}`);
    });
console.log(`----------------------------------------------------`);

// filter (3) => product instock ?
const filterRating = products.filter((product) => product.rating >= 4.5);
// console.log(filterRating);
// Show Rating >= 4.5
titleSection("🌟","Rating grater than or equal 4.5");
filterRating.forEach((productAv, i) => {
     console.log(`${i + 1} : ${productAv.name} :- \n ${cor} ${productAv.price} ${con} \n ${cor} ${rat} ${productAv.rating}`);
    });
console.log(`----------------------------------------------------`);

// filter (4) => product Electronics ?
const filterProductElectronics = products.filter((product) => product.category === "Electronics" && product.price < 5000 && product.inStock == true);
// console.log(filterProductElectronics);
// Show Rating >= 4.5
titleSection("⚡","Electronics less than 5000 and Avaliable");
filterProductElectronics.forEach((productAv, i) => {
     console.log(`${i + 1} : ${productAv.name} :- \n ${cor} ${productAv.price} ${con} \n ${cor} ${rat} ${productAv.rating}`);
    });
console.log(`----------------------------------------------------`);