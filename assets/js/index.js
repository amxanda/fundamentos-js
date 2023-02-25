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
        document.body.style.backgroundImage = "url('https://i.pinimg.com/originals/47/08/6a/47086ab98de1bdb08bfe66e839de5241.gif')";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
    } else if (hours >= 12 && hours < 18) {
        img.src = 'assets/img/afternoon.png';
        document.body.style.backgroundImage = "url('https://camo.githubusercontent.com/6061a8f97a9f1b555b33fc5586a641723f746de4e26fea5201c45b2aec2439f1/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f37642f30372f61322f37643037613235353637383936326433306438373137646366356462643236362e676966')";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
    } else {
        img.src = 'assets/img/night.png';
        document.body.style.backgroundImage = "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/19f1535b-749b-4a8e-8640-d429f027cd3c/de04f5f-61a4ed30-0269-4b7d-bf90-85c046193478.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE5ZjE1MzViLTc0OWItNGE4ZS04NjQwLWQ0MjlmMDI3Y2QzY1wvZGUwNGY1Zi02MWE0ZWQzMC0wMjY5LTRiN2QtYmY5MC04NWMwNDYxOTM0NzguZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.CLEU3cu8m4v-1KBoYaUXJUKTuZI7WVWuNn1xo7uGUQY')";
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
    }
}