function multiply() {
    let number = document.getElementById('textn');
    let multip = document.getElementById('selmult');

    if (number.value.length == 0) {
        window.alert('⚠️ Porfavor, digite um número!');
    } else {
        let n = Number(number.value);

        multip.innerHTML = '';

        for (let i = 1; i <= 10; i++) {
            let item = document.createElement('option');

            item.text = `${n} ✕ ${i} = ${n * i}`;
            multip.appendChild(item);
        }
    }
}