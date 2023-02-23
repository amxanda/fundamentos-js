let number = document.querySelector('input#fnumber');
let list = document.querySelector('select#flist');
let result = document.querySelector('div#result');
let values = [];

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function addn() {
    if (isNumber(number.value) && !inList(number.value, values)) {
        values.push(Number(number.value));

        let item = document.createElement('option');

        item.text = `Valor ${number.value} adicionado com sucesso.`;
        list.appendChild(item);
        result.innerHTML = '';
    } else {
        window.alert("⚠️ Valor inválido ou já inserido na lista.");
    }

    number.value = '';
    number.focus();
}

function finish() {
    if (values.lenght == 0) {
        window.alert("⚠️ Adicione valores antes de finalizar.");
    } else {
        let total = values.length;
        let bigger = values[0];
        let smaller = values[0];
        let s = 0;
        let m = 0;

        for (let position in values) {
            s += values[position];

            if (values[position] > bigger) {
                bigger = values[position];
            }

            if (values[position] < smaller) {
                smaller = values[position];
            }
        }

        m = s / total;

        result.innerHTML = '';
        result.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
        result.innerHTML += `<p>O maior valor informado foi ${bigger}</p>`;
        result.innerHTML += `<p>O menor valor informado foi ${smaller}</p>`;
        result.innerHTML += `<p>Somando todos os valores, temos ${s}</p>`;
        result.innerHTML += `<p>A média dos valores digitais ${m.toFixed(2)}</p>`;
    }
}