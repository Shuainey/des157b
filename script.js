(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const bannerImg = document.querySelector('#bannerImg');
    const sections = document.querySelectorAll('section');
    let mode = 'dark';

    

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            document.getElementById('bannerImg').src = 'media/dark.png'
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'light';
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            document.getElementById('bannerImg').src = 'media/light.png'
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'dark'
        }
    })


})()