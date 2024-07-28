// Script for index.html
document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productId = this.getAttribute('data-id');
            window.location.href = `product.html?id=${productId}`;
        });
    });
});

// Script for product.html
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    const products = {
        1: { name: 'Product 1', price: '$49.99', images: ['img.jpg'] },
        2: { name: 'Product 2', price: '$59.99', images: ['img.jpg'] },
        3: { name: 'Product 3', price: '$39.99', images: ['img.jpg'] },
        4: { name: 'Product 4', price: '$69.99', images: ['img.jpg'] },
        5: { name: 'Product 5', price: '$29.99', images: ['img.jpg'] },
    };

    const product = products[productId];
    if (product) {
        document.querySelector('.product-name').textContent = product.name;
        document.querySelector('.price').textContent = product.price;
        const gallery = document.querySelector('.product-gallery');
        product.images.forEach((src, index) => {
            const img = document.createElement('img');
            img.src = src;
            img.alt = product.name;
            if (index === 0) img.classList.add('active');
            gallery.appendChild(img);
        });
    }
});
