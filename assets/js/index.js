function load() {
    let contents = window.document.getElementById('container');
    let img = window.document.getElementById('img');
    let date = new Date();
    // let hours = date.getHours();
    let hours = 23
    let minutes = date.getMinutes();
    let hour = hours < 10 ? `0${hours}` : hours;
    let minute = minutes < 10 ? `0${minutes}` : minutes;

    clock.innerHTML = `${hour}:${minute}`;

    if (hours >= 0 && hours < 12) {
        img.src = 'assets/img/morning.png';
        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/1a/11/ed/1a11ed2ef56edbf6a5e557e5961a86ce.gif')";
        document.body.style.backgroundSize = 'cover';
    } else if (hours >= 12 && hours < 18) {
        img.src = 'assets/img/afternoon.png';
        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/be/63/08/be63089e483cb06b226f6976723f5e5f.gif')";
        document.body.style.backgroundSize = 'cover';
    } else {
        img.src = 'assets/img/night.png';
        document.body.style.backgroundImage = "url('https://media.tenor.com/TIUfh_o9hIUAAAAd/minimoss-pixel-art.gif')";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'bottom'
    }
}