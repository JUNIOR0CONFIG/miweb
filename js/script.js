// Navegación suave
document.addEventListener('DOMContentLoaded', function() {
    // Menú hamburguesa
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Scroll suave para enlaces internos
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

    // Efecto de aparición al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar efecto a las secciones
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Formulario de contacto
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí puedes agregar el código para enviar el formulario
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Simulación de envío exitoso
            alert('¡Mensaje enviado! Te contactaré pronto.');
            this.reset();
        });
    }

    // Cambiar estilo del header al hacer scroll
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--white)';
            header.style.backdropFilter = 'none';
        }
    });

    // Contador de habilidades (efecto visual)
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((skill, index) => {
        skill.style.animationDelay = `${index * 0.1}s`;
    });

    // Efecto de typing en el hero
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        let i = 0;
        
        function typeWriter() {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Iniciar el efecto typing después de un breve delay
        setTimeout(typeWriter, 1000);
    }
});

// Función para descargar CV (puedes personalizar esta función)
function downloadCV() {
    // Aquí puedes agregar la lógica para descargar tu CV
    // Por ejemplo:
    // const link = document.createElement('a');
    // link.href = 'path/to/your/cv.pdf';
    // link.download = 'Junior_CV.pdf';
    // link.click();
    
    alert('Función de descarga de CV - Personaliza esta función según tus necesidades');
}

// Función para modo oscuro (opcional)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    // Puedes agregar más lógica aquí para guardar la preferencia del usuario
}