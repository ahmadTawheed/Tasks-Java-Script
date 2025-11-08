// name , brand , category , price , inStock , rating
const products = [
{ name: "iPhone 14", brand: "Apple", category: "Mobile", price: 37000, inStock: true, rating: 4.8 },
{ name: "Galaxy S24", brand: "Samsung", category: "Mobile", price: 33000, inStock: false, rating: 4.6 },
{ name: "MacBook Air", brand: "Apple", category: "Laptop", price: 52000, inStock: true, rating: 4.9 },
{ name: "HP Pavilion", brand: "HP", category: "Laptop", price: 27000, inStock: true, rating: 4.3 },
{ name: "Dell XPS", brand: "Dell", category: "Laptop", price: 45000, inStock: false, rating: 4.5 },
{ name: "AirPods Pro", brand: "Apple", category: "Accessories", price: 8000, inStock: true, rating: 4.7 },
{ name: "Galaxy Buds", brand: "Samsung", category: "Accessories", price: 6000, inStock: true, rating: 4.4 },
{ name: "Apple Watch", brand: "Apple", category: "Smart Watch", price: 18000, inStock: false, rating: 4.8 },
{ name: "Fitbit Charge 6", brand: "Fitbit", category: "Smart Watch", price: 9000, inStock: true, rating: 4.2 },
];

function titleSection(X, title) {
    console.log(X, title);
}
const cor = "✅";
const rat = "⭐";
const con = "EGP";

// filter (1)
titleSection("💻","Laptop products rated higher than 4.5");
const filterProductLaptop = products.filter((product)=> product.category === "Laptop" && product.rating > 4.5);
filterProductLaptop.forEach((productS, i) => {
     console.log(`${i + 1} : ${productS.category} :- \n
    ${cor} ${productS.name}
    ${cor} ${productS.brand}
    ${cor} ${productS.price} ${con}
    ${cor} ${rat} ${productS.rating}
     `);
});
console.log(`----------------------------------------------------`);

// filter (2)
titleSection("🟢","Available Apple products");
const filterProductApple = products.filter((product)=> product.brand === "Apple" && product.inStock === true);
filterProductApple.forEach((productS, i) => {
     console.log(`${i + 1} : ${productS.category} :- \n
    ${cor} ${productS.name}
    ${cor} ${productS.brand}
    ${cor} ${productS.price} ${con}
    ${cor} ${rat} ${productS.rating}
     `);
});
console.log(`----------------------------------------------------`);

// filter (3)
titleSection("💰","Products priced under 10,000 and available");
const filterProductLessAva = products.filter((product)=> product.price < 10000 && product.inStock === true);
filterProductLessAva.forEach((productS, i) => {
     console.log(`${i + 1} : ${productS.category} :- \n
    ${cor} ${productS.name}
    ${cor} ${productS.brand}
    ${cor} ${productS.price} ${con}
    ${cor} ${rat} ${productS.rating}
     `);
});
console.log(`----------------------------------------------------`);

// filter (4)
titleSection("💰","Total Price");
const totalPrice = products.reduce((sum, product) => sum + product.price ,0);
console.log(totalPrice);
console.log(`----------------------------------------------------`);

// filter (5) By Reduce
titleSection("🌟","Heigh Rate");
const AllRate = products.map((rateProduct) => rateProduct.rating);
const heighRate = AllRate.reduce((max, rate) => Math.max(max, rate));
console.log(heighRate);
console.log(`----------------------------------------------------`);

// // filter (5) By Sort
// titleSection("🌟","Heigh Rate");
// const AllRate2 = products.map((rateProduct) => rateProduct.rating);
// const sortRate2 = AllRate.sort((a , b) => a - b);
// const heighRate2 = sortRate2.pop();
// console.log(heighRate2);
// console.log(`----------------------------------------------------`);

// filter (6)
titleSection("🟢","All Name Product");
const AllNames = products.map((rateProduct) => rateProduct.name);
console.log(AllNames);
console.log(`----------------------------------------------------`);
