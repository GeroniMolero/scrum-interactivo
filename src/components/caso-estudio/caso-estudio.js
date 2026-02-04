// CASO ESTUDIO COMPONENT LOGIC

export function initCaseStudy() {
    // Get all tab buttons and content sections
    const tabButtons = document.querySelectorAll('.case-tab-btn');
    const tabContents = document.querySelectorAll('.case-tab-content');

    // Add click event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the target tab from data attribute
            const targetTab = this.getAttribute('data-case-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            // Add active class to corresponding content
            const activeContent = document.querySelector(
                `.case-tab-content[data-case-tab="${targetTab}"]`
            );
            if (activeContent) {
                activeContent.classList.add('active');
            }
        });
    });

    // Optional: Add keyboard navigation (arrow keys)
    document.addEventListener('keydown', function(event) {
        const activeButton = document.querySelector('.case-tab-btn.active');
        if (!activeButton) return;

        const parent = activeButton.parentElement;
        const buttons = Array.from(parent.querySelectorAll('.case-tab-btn'));
        const currentIndex = buttons.indexOf(activeButton);

        if (event.key === 'ArrowRight' && currentIndex < buttons.length - 1) {
            event.preventDefault();
            buttons[currentIndex + 1].click();
        } else if (event.key === 'ArrowLeft' && currentIndex > 0) {
            event.preventDefault();
            buttons[currentIndex - 1].click();
        }
    });
}
