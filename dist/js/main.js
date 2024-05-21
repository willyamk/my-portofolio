window.addEventListener('DOMContentLoaded', function () {
    //======================  Splashscreen  ======================//
    let isSplashShown = localStorage.getItem('isSplashShown');
    let currentTimestamp = new Date().getTime();
    let oneMonthInMillis = 30 * 24 * 60 * 60 * 1000;

    if (!isSplashShown || (currentTimestamp - parseInt(isSplashShown) > oneMonthInMillis)) {
        let splashScreen = document.querySelector('.splashscreen');
        let mainContent = document.querySelector('main');

        setTimeout(function () {
            splashScreen.style.display = 'none';
            mainContent.style.display = 'block';
            document.body.style.overflow = 'auto';
            localStorage.setItem('isSplashShown', currentTimestamp);
        }, 3000);
    } else {
        let splashScreen = document.querySelector('.splashscreen');
        splashScreen.style.display = 'none';
        let mainContent = document.querySelector('main');
        mainContent.style.display = 'block';
        document.body.style.overflow = 'auto';
    }

    //======================  Sidebar  ======================//
    const hamburger = document.getElementById('hamburger');
    const close = document.getElementById('close');
    const sidebar = document.getElementById('sidebar');
    const sidebarLinks = document.querySelectorAll('#sidebar a');

    hamburger.addEventListener('click', () => {
        sidebar.classList.toggle('left-0');
    });

    close.addEventListener('click', () => {
        sidebar.classList.remove('left-0');
    });

    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            sidebar.classList.remove('left-0');
        });
    });

    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    const setActiveLink = () => {
        let index = sections.length;

        while (--index && window.scrollY + 100 < sections[index].offsetTop) {}

        links.forEach((link) => link.classList.remove('active-link'));
        sidebarLinks.forEach((link) => link.classList.remove('active-link'));

        if (links[index]) links[index].classList.add('active-link');
        if (sidebarLinks[index]) sidebarLinks[index].classList.add('active-link');
    };

    setActiveLink();
    window.addEventListener('scroll', setActiveLink);
});

//===============  Disable Refresh Using Key Combinations  ===============//
document.addEventListener('keydown', function(event) {
    if (event.key === 'F5' ||
        (event.ctrlKey && event.key === 'r') ||
        (event.ctrlKey && event.key === 'R')) {
        event.preventDefault();
    }
});

//=========  Disable Refresh Using Mouse Right Click Context Menu  =========//
document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
});

//======================  Rotate Text Animation  ======================//
const text = document.querySelector(".text p");

text.innerHTML = text.innerText
    .split("")
    .map((char, i) => `<span style="transform:rotate(${i * 8.455}deg)">${char}</span>`)
    .join("");
