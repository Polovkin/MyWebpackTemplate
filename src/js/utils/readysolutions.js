//Hide header on scroll
window.onscroll = function (e) {
    const list = document.querySelector('.header__list')
    if (this.scrollY > 0) {

        if ((this.oldScroll > this.scrollY) && this.scrollY >= 0) {
            header.classList.add('scroll-up');
            header.classList.remove('scroll-down');
        } else if (!list.classList.contains('show')) {
            header.classList.add('scroll-down');
            header.classList.remove('scroll-up');
        }
        this.oldScroll = this.scrollY;
        delete window.onscroll;
    }

};
