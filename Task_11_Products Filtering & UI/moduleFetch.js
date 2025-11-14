document.addEventListener("DOMContentLoaded", () => {
// [1] Catch Element to Access it
    const productsContainer = document.getElementById('productsContainer');
    const nameFilter = document.getElementById('nameFilter');
    const categoryFilter = document.getElementById('categoryFilter');
    const priceFilter = document.getElementById('priceFilter');
// [2] Save Products and Category
    let allProducts = [];
    let categories = new Set();
// [3] fetch API
async function fetchProducts() {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        allProducts = await response.json();

        // catch category only from allProduct
        allProducts.forEach(product => categories.add(product.category));

        // in the end call functions
        populateCategoryFilter();
        renderProducts(allProducts);

    } catch (error) {
        productsContainer.innerHTML = `<p style="color: red; grid-column: 1/-1; text-align: center;">فشل تحميل المنتجات. يرجى المحاولة مرة أخرى لاحقاً. الخطأ: ${error.message}</p>`;
    }
}

// [4] Render Products
function renderProducts(productsToRender) {
    productsContainer.innerHTML = '';
    if(productsToRender.length === 0) {
        productsContainer.innerHTML = `<p style="grid-column: 1/-1; text-align: center;">لا توجد منتجات تطابق بحثك.</p>`;
        return;
    }

// [5] Create Card
productsToRender.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute("id", "chooseCard");
        card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p class="price">${product.price.toFixed(2)} $</p>
        <p class="category">${product.category}</p>
        `;
        productsContainer.appendChild(card);
    });
}

// [6] Select Category Filtration
function populateCategoryFilter() {
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    })
}

// [7] Filtration System
function applyFilters() {
    // catch value from search , category , price
    const nameValue = nameFilter.value.toLowerCase();
    const categoryValue = categoryFilter.value;
    const priceValue = parseFloat(priceFilter.value) || Infinity;
    // Generate Filtration
    const filteredProducts = allProducts.filter(product => {
        const nameMatch = product.title.toLowerCase().includes(nameValue);
        const categoryMatch = categoryValue === 'all' || product.category === categoryValue;
        const priceMatch = product.price <= priceValue;

        return nameMatch && categoryMatch && priceMatch;
    });
    renderProducts(filteredProducts);
}




// [8] Add Events
nameFilter.addEventListener('input', applyFilters);
categoryFilter.addEventListener('change', applyFilters);
priceFilter.addEventListener('input', applyFilters);

// [9] Start fetch
fetchProducts();
});