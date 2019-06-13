window.onload = function () {
    let level = document.querySelector('#level');
    let bts1 = document.querySelector('.bts1');
    let bts2 = document.querySelector('.bts2');
    let bachelor = document.querySelector('.bachelor');

    // dynamic selections with respect to the "level field" and removing the required attribute
    level.addEventListener('change', item => {
        if (level.options[level.selectedIndex].value == 'bts1') {
            bts1.style.display = 'none';
            bts1.querySelector('input').removeAttribute('required');
            bts2.style.display = 'none';
            bts2.querySelector('input').removeAttribute('required');
            bachelor.style.display = 'none';
            bachelor.querySelector('input').removeAttribute('required');

        } else if (level.options[level.selectedIndex].value == 'bts2') {
            bts2.style.display = 'none';
            bts1.style.display = 'block';
            bts2.querySelector('input').removeAttribute('required');
            bachelor.style.display = 'none';
            bachelor.querySelector('input').removeAttribute('required');
        } else if (level.options[level.selectedIndex].value == 'bachelor') {
            bts1.style.display = 'block';
            bts2.style.display = 'block';
            bachelor.style.display = 'none';
            bachelor.querySelector('input').removeAttribute('required');
        }
    });

    // smooth scroll effect
    let scroll_item = document.querySelector('#scroll_item');
    scroll_item.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}