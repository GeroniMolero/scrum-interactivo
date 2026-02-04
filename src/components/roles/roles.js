// Roles Component Logic
export function initRoles() {
    document.querySelectorAll('.btn-details').forEach(button => {
        button.addEventListener('click', function() {
            const details = this.nextElementSibling;
            
            // Alternar clase visible
            details.classList.toggle('visible');
            
            // Cambiar texto del botón
            if (details.classList.contains('visible')) {
                this.textContent = 'Ocultar Detalles';
                this.style.background = '#FF6B6B';
            } else {
                this.textContent = 'Ver Detalles';
                this.style.background = '#4ECDC4';
            }
        });
    });
}
