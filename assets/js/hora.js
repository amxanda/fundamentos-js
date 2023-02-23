function load() {
    let contents = window.document.getElementById('container');
    let img = window.document.getElementById('img');
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let hour = hours < 10 ? `0${hours}` : hours;
    let minute = minutes < 10 ? `0${minutes}` : minutes;

    clock.innerHTML = `${hour}:${minute}`;

    if (hours >= 0 && hours < 12) {
        img.src = 'assets/img/morning.png';
        document.body.style.backgroundImage = "url('assets/img/manha.gif')";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'bottom';
    } else if (hours >= 12 && hours < 18) {
        img.src = 'assets/img/afternoon.png';
        document.body.style.backgroundImage = "url('assets/img/tarde.gif')";
        document.body.style.backgroundSize = 'cover';
    } else {
        img.src = 'assets/img/night.png';
        document.body.style.backgroundImage = "url('assets/img/noite.gif')";
        document.body.style.backgroundSize = 'cover';
    }
}