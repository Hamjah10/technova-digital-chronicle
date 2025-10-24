document.addEventListener('DOMContentLoaded', () => {

    // --- Universal Hamburger Menu Logic ---
    const hamburger = document.querySelector(".hamburger-menu");
    const navLinks = document.querySelector(".nav-links");
    if (hamburger && navLinks) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navLinks.classList.toggle("active");
        });
    }

    // --- Index Page Logic ---
    const titleElement = document.getElementById('main-title');
    if (titleElement) {
        const titleText = "The Digital Chronicle";
        let i = 0;
        function typeWriter() {
            if (i < titleText.length) {
                titleElement.innerHTML += titleText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            } else {
                titleElement.innerHTML += '<span class="typing-cursor"></span>';
            }
        }
        typeWriter();
    }
    
    if (document.getElementById('particles-js')) {
        particlesJS("particles-js", { "particles": { "number": { "value": 80, "density": { "enable": true, "value_area": 800 } }, "color": { "value": "#00aaff" }, "shape": { "type": "circle" }, "opacity": { "value": 0.5 }, "size": { "value": 3, "random": true }, "line_linked": { "enable": true, "distance": 150, "color": "#00aaff", "opacity": 0.4, "width": 1 }, "move": { "enable": true, "speed": 2, "direction": "none", "out_mode": "out" } }, "interactivity": { "events": { "onhover": { "enable": true, "mode": "grab" }, "onclick": { "enable": true, "mode": "push" } }, "modes": { "grab": { "distance": 140, "line_linked": { "opacity": 1 } }, "push": { "particles_nb": 4 } } }, "retina_detect": true });
    }

    // --- Timeline Pages Logic (AI & Robotics) ---
    if (document.querySelector('.timeline')) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.timeline-container').forEach(container => {
            observer.observe(container);
        });

        const modal = document.getElementById('timelineModal');
        const modalImg = document.getElementById('modalImg');
        const modalTitle = document.getElementById('modalTitle');
        const modalDesc = document.getElementById('modalDesc');
        const closeBtn = document.querySelector('.close-btn');

        if (modal) {
            document.querySelectorAll('.read-more-btn').forEach(button => {
                button.addEventListener('click', (e) => {
                    const container = e.target.closest('.timeline-container');
                    modalTitle.textContent = container.dataset.title;
                    modalImg.src = container.dataset.img;
                    modalDesc.textContent = container.dataset.desc;
                    modal.style.display = 'flex';
                });
            });

            const closeModal = () => { modal.style.display = 'none'; }
            closeBtn.addEventListener('click', closeModal);
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    closeModal();
                }
            });
        }
    }

    // --- Future Page Logic ---
    if (document.querySelector('.future-container')) {
        const nodes = document.querySelectorAll('.node');
        const contentItems = document.querySelectorAll('.content-item');
        nodes.forEach(node => {
            node.addEventListener('click', () => {
                const targetId = node.dataset.target;
                nodes.forEach(n => n.classList.remove('active'));
                node.classList.add('active');
                contentItems.forEach(item => {
                    item.classList.toggle('active', item.id === targetId);
                });
            });
        });
    }
});