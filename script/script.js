let goTop = document.querySelector('.back_to_top');
    window.addEventListener('scroll', trackScroll);
    goTop.addEventListener('click', backToTop);
    function trackScroll() {
        let scroll = window.pageYOffset;
        let coord = document.documentElement.clientHeight;

        if (scroll > coord) {
        goTop.classList.add('back_to_top-show');
        }
        if (scroll < coord) { goTop.classList.remove('back_to_top-show'); } } 
        function backToTop() { if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
        }
    }

    