document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.getElementById('cards-container');
    const categorySelect = document.getElementById('category');

    const products = [
        { category: 'laptop', name: 'Laptop 1', image: 'laptop1.jpg', specs: '8GB RAM, 256GB SSD', price: '$899' },
        { category: 'laptop', name: 'Laptop 1', image: 'laptop1.jpg', specs: '8GB RAM, 256GB SSD', price: '$899' },
        { category: 'laptop', name: 'Laptop 1', image: 'laptop2.jpg', specs: '8GB RAM, 256GB SSD', price: '$899' },
        { category: 'laptop', name: 'Laptop 1', image: 'laptop1.jpg', specs: '8GB RAM, 256GB SSD', price: '$899' },
        { category: 'laptop', name: 'Laptop 1', image: 'laptop1.jpg', specs: '8GB RAM, 256GB SSD', price: '$899' },
        { category: 'laptop', name: 'Laptop 1', image: 'laptop3.jpg', specs: '8GB RAM, 256GB SSD', price: '$899' }, 
        { category: 'laptop', name: 'Laptop 1', image: 'laptop1.jpg', specs: '8GB RAM, 256GB SSD', price: '$899' }, 
        { category: 'laptop', name: 'Laptop 1', image: 'laptop1.jpg', specs: '8GB RAM, 256GB SSD', price: '$899' }, 
        { category: 'laptop', name: 'Laptop 1', image: 'laptop1.jpg', specs: '8GB RAM, 256GB SSD', price: '$899' }, 
        { category: 'laptop', name: 'Laptop 1', image: 'laptop1.jpg', specs: '8GB RAM, 256GB SSD', price: '$899' }, 
        { category: 'laptop', name: 'Laptop 1', image: 'laptop4.jpg', specs: '8GB RAM, 256GB SSD', price: '$899' }, 
        { category: 'laptop', name: 'Laptop 1', image: 'laptop1.jpg', specs: '8GB RAM, 256GB SSD', price: '$899' },
        { category: 'laptop', name: 'Laptop 1', image: 'laptop1.jpg', specs: '8GB RAM, 256GB SSD', price: '$899' }, 
        { category: 'laptop', name: 'Laptop 1', image: 'laptop5.jpg', specs: '8GB RAM, 256GB SSD', price: '$899' },
        // Add more products here
    ];

    // Initial card generation
    generateCards(products);

    categorySelect.addEventListener('change', function() {
        const selectedCategory = categorySelect.value;
        const filteredProducts = selectedCategory === 'all' ? products : products.filter(product => product.category === selectedCategory);
        cardsContainer.innerHTML = ''; // Clear existing cards
        generateCards(filteredProducts);
    });

    function generateCards(products) {
        products.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.specs}</p>
                <p>${product.price}</p>
            `;
            cardsContainer.appendChild(card);
        });
    }
});
