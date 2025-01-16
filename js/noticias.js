document.querySelectorAll('.acordeon__tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const parent = tab.parentElement;
        const content = parent.querySelector('.acordeon__content');

        // Cierra todos los demás acordeones
        document.querySelectorAll('.acordeon__item').forEach(item => {
            if (item !== parent) {
                item.classList.remove('active');
                item.querySelector('.acordeon__content').style.maxHeight = '0';
            }
        });

        // Alterna el acordeón actual
        if (parent.classList.contains('active')) {
            parent.classList.remove('active');
            content.style.maxHeight = '0';
        } else {
            parent.classList.add('active');
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

