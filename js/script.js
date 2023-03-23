console.log('connecté !');

// Changement de mes initiales en mon nom :

// je sélectionne et je stocke :
const myName = document.querySelector('.myName');
const completeName = document.querySelector('.completeName');
const initiales = document.querySelector('.initiales');
// je déclare une variable que j'utiliserai dans deux fonctions :
let hauteur ;

// Je crée 2 fonctions :
// Quand je scroll vers le bas, je montre mon nom complet et je cache mes initiales grâce aux changements de display :
window.addEventListener('scroll', showName)
    // console.log('défilement détecté')
    function showName() {
// Je définie ma variable hauteur, pour savoir à quels pixels je veux faire mes changements :
        hauteur = document.documentElement.scrollTop;
        console.log(hauteur, 'nombre de pixels depuis le haut de la page');   

        if (hauteur >= 950) {
            // console.log('affichage de mon nom');
            completeName.style.display = 'flex';
            initiales.style.display = 'none';
        };
    };

// Si je reonte vers le haut aec le scroll, j'enlève les changements :
window.addEventListener('scroll', maskName)
    function maskName () {
        // console.log(hauteur, 'deuxième heuteur');
        if (hauteur < 950) {
            completeName.style.display = 'none';
            initiales.style.display = 'flex';
        };
    };
    
//---------------------------------------------------------------