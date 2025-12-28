(function(){
    function loadFragment(el){
        var src = el.getAttribute('data-fragment');
        if (!src) return;
        fetch(src).then(function(res){ return res.text(); }).then(function(html){
            el.innerHTML = html;
        }).catch(function(){
            el.innerHTML = '<p>Kon samenvatting niet laden.</p>';
        });
    }
    document.addEventListener('DOMContentLoaded', function(){
        var sections = document.querySelectorAll('.summary-content[data-fragment]');
        Array.prototype.forEach.call(sections, loadFragment);
    });
})();