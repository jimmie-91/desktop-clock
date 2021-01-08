setInterval(setClock, 1000);

const secondHand = document.querySelector('[data-second-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const hourHand = document.querySelector('[data-hour-hand]');

function setClock() {
    const date = new Date();
    const secondsRatio = date.getSeconds()/60;
    const minutesRatio =(secondsRatio + date.getMinutes())/60;
    const hourRatio = (minutesRatio + date.getHours())/12;

    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hourRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock(); 