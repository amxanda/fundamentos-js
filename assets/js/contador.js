function count() {
    let begin = document.getElementById('textb');
    let end = document.getElementById('texte');
    let steps = document.getElementById('texts');
    let result = document.getElementById('result');

    if (begin.value.length == 0 || end.value.length == 0 || steps.value.length == 0) {
        window.alert('[Error] ⚠️ Faltam Dados')
    } else {
        result.innerHTML = ''

        let b = Number(begin.value);
        let e = Number(end.value);
        let s = Number(steps.value);

        if (b < e) {
            for (let i = b; i <= e; i += s) {
                result.innerHTML += `${i}, `;
            }
        } else {
            for (let i = b; i >= e; i -= s) {
                result.innerHTML += `${i}, `;
            }
        }

        result.innerHTML += `✔`;
    }
}