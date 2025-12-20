const date = new Date();
const days = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
//"1.png", "2.png",
const ornamentImg = ["🎁", "🪩", "⚜️", "🦌", "🔔", "🎅", "☃️", "🍪", "💝", "🔴", "🎊", "💎", "🏮", "🏵", "🧸", "☕", "❣️", "🛷"];
const stars = ["⭐", "🌟", "✶", "✨", "★", "💫", "✯", "✪", "✴︎"];

function changeStar() {
    let randomIndex = Math.floor(Math.random() * 9);
    document.getElementById("star").innerText = stars[randomIndex];
}

function changeOrnament(id) {
    let ranIndex = Math.floor(Math.random() * 18);
    document.getElementById("id").innerText = ornamentImg[ranIndex];
}

document.addEventListener('DOMContentLoaded', () => {
    const decorations = document.getElementById("decorations");
    const dateText = document.getElementById("date");
    const star = document.getElementById("star");

    dateText.innerText = month + "/" + days + "/" + year;

    /*if (month === 12) {
        let daysTilChristmas = Math.max(25 - days, 0);

        for (let i = 0; i < daysTilChristmas; i++) {
            const randomImg = ornamentImg[Math.floor(Math.random() * 2)]
            decorations.innerHTML += `<img src="img/orn/${randomImg}" class="ornament" id="ornament${i}">`;            //const ornament = document.getElementById("ornament" + i);
            const ornament = document.getElementById("ornament"+i);
            ornament.style.width = (Math.random() * 1.7 + 1) + "rem";
            ornament.style.left = (Math.random() * 40 + 30) + "%"
            ornament.style.top = (Math.random() * 10 + 6) + "rem"
        }
    }*/

    star.addEventListener('click', changeStar);
    //ornament.addEventListener('click', changeOrnament);
    for (let i = 1; i <= 5; i++) {
        const ornament = document.getElementById(`ornament${i}`);
        ornament.addEventListener('click', () => changeOrnament(`ornament${i}`));
    }
})
