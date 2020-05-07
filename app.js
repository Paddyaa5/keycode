const insert = document.getElementById('insert');

window.addEventListener('keypress', (e) => {
    const { key, which, code} = e;
    intro.innerHTML = `
        <div class="key">event.key: ${key}</div>
        <br>
        <div class="key">event.which: ${which}</div>
        <br>
        <div class="key">event.code: ${code}</div>
    `
    heading.innerHTML = `<div class="daKey">${key}</div>`
})