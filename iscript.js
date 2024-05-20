document.addEventListener('DOMContentLoaded', () => {
    const movingButton = document.getElementById('movingButton');
    const linkButton = document.getElementById('linkButton');

    movingButton.addEventListener('mouseover', () => {
        const containerRect = movingButton.parentElement.getBoundingClientRect();
        const buttonRect = movingButton.getBoundingClientRect();
        
        // Definindo a movimentação para 300% do tamanho do botão
        const maxX = containerRect.width - buttonRect.width * 8;
        const maxY = containerRect.height - buttonRect.height * 8;
        
        const randomX = Math.random() * maxX - buttonRect.width;
        const randomY = Math.random() * maxY - buttonRect.height;
        
        movingButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    });

    linkButton.addEventListener('click', () => {
        window.location.href = 'https://youtu.be/7de9OyP33_0?si=i51PY_i3O__J9Ioe';
    });
});
