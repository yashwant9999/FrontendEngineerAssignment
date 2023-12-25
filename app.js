document.addEventListener("DOMContentLoaded", function () {
    // Simulate fetching product data from a mock API (Using JSONPlaceholder as an example)
    fetch("https://jsonplaceholder.typicode.com/photos?_limit=6")
        .then(response => response.json())
        .then(products => {
            const productGrid = document.querySelector(".grid");

            products.forEach(product => {
                const productCard = document.createElement("div");
                productCard.className = "grid-product";
                productCard.innerHTML = `
                    <img src="${product.thumbnailUrl}" alt="${product.title}">
                    <div class="grid-detail">
                        <h3>${product.title}</h3>
                        <p>${product.id}</p>
                    </div>
                `;
                productGrid.appendChild(productCard);
            });
        })
        .catch(error => console.error("Error fetching product data:", error));
});