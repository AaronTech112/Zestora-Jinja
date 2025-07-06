document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = this.elements['name'].value;
            const email = this.elements['email'].value;
            const address = this.elements['address'].value;
            const product = this.elements['product'].value;
            const quantity = this.elements['quantity'].value;

            const message = `New Order Details:\n\nName: ${name}\nEmail: ${email}\nAddress: ${address}\nProduct: ${product}\nQuantity: ${quantity}`;

            const whatsappNumber = '2349128577010';
            const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            window.open(whatsappUrl, '_blank');
        });
    }
});