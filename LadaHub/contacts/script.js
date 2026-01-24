document.addEventListener('DOMContentLoaded', function() {
            const burger = document.querySelector('.burger-menu');
            const mobileMenu = document.querySelector('.mobile_menu');

            if (burger && mobileMenu) {
                burger.addEventListener('click', function() {
                    burger.classList.toggle('active');
                    mobileMenu.classList.toggle('open');
                });
            } else {
                console.error('Элементы бургер-меню не найдены в DOM.');
            }
            
        });