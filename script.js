// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Botón de saludo
    const saludoBtn = document.getElementById('saludoBtn');
    const heroContent = document.querySelector('.hero-content');
    
    saludoBtn.addEventListener('click', function() {
        // Crear elemento de saludo
        const saludo = document.createElement('div');
        saludo.className = 'saludo-mensaje';
        saludo.innerHTML = `
            <h3>¡Hola! 👋</h3>
            <p>¡Qué gusto verte por aquí! Espero que te guste mi página.</p>
        `;
        saludo.style.cssText = `
            background: rgba(255,255,255,0.9);
            color: #333;
            padding: 20px;
            border-radius: 10px;
            margin-top: 20px;
            animation: fadeIn 0.5s ease-in;
        `;
        
        // Agregar estilos de animación
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(-10px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
        document.head.appendChild(style);
        
        // Remover saludo anterior si existe
        const saludoAnterior = document.querySelector('.saludo-mensaje');
        if (saludoAnterior) {
            saludoAnterior.remove();
        }
        
        heroContent.appendChild(saludo);
        
        // Remover automáticamente después de 5 segundos
        setTimeout(() => {
            if (saludo.parentNode) {
                saludo.remove();
            }
        }, 5000);
    });
    
    // Formulario de contacto
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Validación básica
        if (!name || !email || !message) {
            alert('Por favor, completa todos los campos.');
            return;
        }
        
        // Simular envío del formulario
        alert(`¡Gracias ${name}! Tu mensaje ha sido enviado. Te responderé a: ${email}`);
        
        // Limpiar formulario
        contactForm.reset();
    });
    
    // Smooth scroll para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Efecto de cambio de color en navbar al hacer scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(44, 62, 80, 0.95)';
            navbar.style.backdropFilter = 'blur(10px)';
        } else {
            navbar.style.background = '#2c3e50';
            navbar.style.backdropFilter = 'none';
        }
    });
    
    // Contador de visitas simple
    let visitCount = localStorage.getItem('visitCount') || 0;
    visitCount = parseInt(visitCount) + 1;
    localStorage.setItem('visitCount', visitCount);
    
    console.log(`¡Bienvenido Junior! Esta es tu visita número: ${visitCount}`);
});