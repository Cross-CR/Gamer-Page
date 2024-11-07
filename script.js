// Desplazamiento suave al hacer clic en los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Mostrar el botón "Únete a la Comunidad" al hacer scroll
window.addEventListener('scroll', () => {
    const ctaButton = document.querySelector('.cta');
    if (window.scrollY > 300) {
        ctaButton.style.display = 'inline-block';  // Muestra el botón cuando se desplaza hacia abajo
    } else {
        ctaButton.style.display = 'none';  // Oculta el botón cuando está arriba
    }
});

// Función para suscripción al boletín
const subscribeButton = document.querySelector('.boletin button');
const emailInput = document.querySelector('.boletin input');

if (subscribeButton) {
    subscribeButton.addEventListener('click', () => {
        const email = emailInput.value;
        if (email) {
            alert(`¡Gracias por suscribirte, ${email}!`);
            emailInput.value = '';  // Limpiar el campo de email
        } else {
            alert('Por favor, ingresa un correo válido.');
        }
    });
}
