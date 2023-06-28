// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }
const imgGallery = document.querySelector('.img-gallery');
const navBar = document.getElementById('navbar');
let images = ``;

async function fetchRandomImages () {
    try {
        await fetch(`https://api.unsplash.com/photos/?client_id=2WhxTU-EOTsgEb3212OI-oATAc4Zsb81PaTdAzJSt_E`)
        .then(res => res.json())
        .then(data => {
            data.forEach(image => {
                images += `
                <img class="image-card" src=${image.urls.small} alt=${image.title} />
                `;
                imgGallery.innerHTML = images
            });
        })
    } catch (error) {
        alert(error.message)
    }
}
fetchRandomImages()

window.addEventListener('scroll', () => {
    window.addEventListener('scroll', () => {
        if (window.scrollY > navBar.offsetTop) {
            navBar.style.position = 'fixed';
            navBar.style.top = '0';
            navBar.style.scrollBehavior = 'smooth'
        } else {
            navBar.style.position = 'static';
            navBar.style.scrollBehavior = 'smooth'
        }
    });
})