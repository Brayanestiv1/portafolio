// efecto de subrayado
document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelectorAll('nav ul div a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
           
            menuLinks.forEach(item => item.classList.remove('active'));
            
            this.classList.add('active');

            const targetId = this.getAttribute('href');
            
            if (targetId.startsWith('#')) {
                e.preventDefault(); 
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});



   
    
        // Typing effect logic
        const typingElement = document.getElementById('typing-text');
        const textToType = "Desarrollador Backend"; 
        let currentText = '';
        let isTyping = true;
        let charIndex = 0;
    
        function typeEffect() {
            if (isTyping) {
                // Typing phase
                if (charIndex < textToType.length) {
                    currentText += textToType[charIndex];
                    typingElement.textContent = currentText;
                    charIndex++;
                    setTimeout(typeEffect, 100); 
                } else {
                    // Pause before erasing
                    isTyping = false;
                    setTimeout(typeEffect, 2000); 
                }
            } else {
                // Erasing phase
                if (charIndex > 0) {
                    currentText = currentText.slice(0, -1);
                    typingElement.textContent = currentText;
                    charIndex--;
                    setTimeout(typeEffect, 50); 
                } else {
                    // Reset for next cycle
                    isTyping = true;
                    setTimeout(typeEffect, 500); 
                }
            }
        }
    
        
        typeEffect();
    ;