const date = new Date();
const days = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

const ornamentImg = [];
const stars = [];

function changeStar() {
    let randomIndex = Math.floor(Math.random() * 6);
    document.getElementById("star").innerText = stars[randomIndex];
}

document.addEventListener('DOMContentLoaded', () => {
    //const decorations = document.getElementById("decorations");
    const dateText = document.getElementById("date");
    const star = document.getElementById("star");

    dateText.innerText = days + "/" + month + "/" + year;

    if (month === 12) {
        let daysTilChristmas = Math.max(25 - days, 0);

        for (let i = 0; i < daysTilChristmas; i++) {
            const randomImg = ornamentImg[Math.floor(Math.random() * 18)]
            //decorations.innerHTML +=
            const ornament = document.getElementById("ornament" + i);
            ornament.style.marginLeft = (Math.random()*10+4)+"rem";
            ornament.style.marginTop = (Math.random()*2+3)+"rem";
        }
    }

    star.addEventListener('click', changeStar);
})
