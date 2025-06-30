document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const contentSections = document.querySelectorAll('.content-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            this.classList.add('active');
            const target = this.getAttribute('data-target');
            document.getElementById(target).classList.add('active');
        });
    });

    const postForm = document.querySelector('.post-form');
    if (postForm) {
        postForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Your message has been received. We appreciate your support!');
            this.reset();
        });
    }

    const flames = document.querySelectorAll('.flame');
    document.addEventListener('mousemove', function(e) {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;

        flames.forEach((flame, index) => {
            const offset = (index + 1) * 0.2;
            const newX = mouseX * 100 - 10 + (offset * 15);
            const newY = (1 - mouseY) * 20;
            flame.style.left = `${newX}%`;
            flame.style.bottom = `${newY}px`;
        });
    });

    const updateActiveTabGlow = () => {
        const activeTab = document.querySelector('.nav-link.active');
        if (activeTab) {
            activeTab.style.textShadow = `0 0 10px ${getComputedStyle(document.documentElement).getPropertyValue('--secondary')}`;
        }
    };

    updateActiveTabGlow();
    setInterval(updateActiveTabGlow, 1000);
});
