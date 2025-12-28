(function(){
    var btn = document.createElement('button');
    btn.id = 'to-top';
    btn.className = 'to-top';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Naar boven');
    btn.setAttribute('title', 'Naar boven');
    btn.textContent = '^';
    document.addEventListener('DOMContentLoaded', function(){
        document.body.appendChild(btn);
        toggle();
    });
    function toggle(){
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }
    window.addEventListener('scroll', toggle);
    btn.addEventListener('click', function(){
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();