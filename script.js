const starter = document.getElementById('starter');
const starterTwo = document.getElementById('secondStart')
const click = document.getElementById('click');
const computedStyle = window.getComputedStyle(starter);
const content = document.getElementById('content');
let isClick = false;

window.addEventListener('scroll', () => {
    if(window.innerWidth >= 1024){
        const skills = document.getElementById('skills');

        // Position de la section skills par rapport au haut de la page
        const skillsOffsetTop = skills.offsetTop;

        // Hauteur de la section skills
        const skillsHeight = skills.offsetHeight;

        // Hauteur de la fenêtre visible
        const windowHeight = window.innerHeight;

        // Position actuelle du défilement
        const scrollPosition = window.scrollY;

        // Si la section skills est visible dans la fenêtre
        if (scrollPosition + windowHeight > skillsOffsetTop && scrollPosition < skillsOffsetTop + skillsHeight) {
            // Calculer la position de défilement relative à la section skills
            const relativeScrollPosition = scrollPosition - skillsOffsetTop;

            // Facteur de vitesse pour le défilement parallaxe (ajustable)
            const parallaxSpeed = 0.5;

            // Calculer la position Y de l'image en fonction du défilement (effet parallaxe)
            const backgroundPositionY = relativeScrollPosition * parallaxSpeed;

            // Appliquer la position de fond calculée
            skills.style.backgroundPositionY = `${backgroundPositionY}px`;
        } else {
            // Si la section n'est pas visible, l'image reste en haut de la div
            skills.style.backgroundPositionY = '0px';
        }
    }
    
});



starter.addEventListener('animationend', () => {
    starter.style.animation = "none";
    setTimeout(function() {
        click.style.animation = 'helper 2s infinite';
    }, 1000)
});

starter.addEventListener('mouseenter', () => {
    if (computedStyle.animation === '0s ease 0s 1 normal none running none' && isClick == false) {
        starter.style.cursor = 'pointer';
        click.style.animation = 'none';
        starter.style.transform = 'scale(1.5) translate(-50%, -50%)';
    }
});

starter.addEventListener('mouseleave', () => {
    if(computedStyle.animation === '0s ease 0s 1 normal none running none' && isClick == false){
        click.style.animation = 'helper 2s infinite';
        starter.style.transform = 'scale(1) translate(-50%, -50%)';
    }
})

starter.addEventListener('click', () => {
    starter.style.cursor = 'default';
    isClick = true
    starter.style.transform = "scale(0.9) translate(-50%, -50%)";
    setTimeout(function() {
        starter.style.transform = "scale(25)";
    }, 500);
    setTimeout(function() {
        starterTwo.style.transition = "transform 1s ease";
        starterTwo.style.transformOrigin = "center";
        starterTwo.style.transform = "scale(500) translate(-100%, -100%)";
        click.style.display = "none";
    },900)
    setTimeout(function() {
        document.body.style.backgroundColor = 'white';
        starter.style.display = 'none';
        document.body.style.overflow = 'visible';
        content.style.display = 'block';
    },2000);
});

