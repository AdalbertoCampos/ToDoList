const addTask = document.getElementById('addTask')
const writeTask = document.getElementById('writeTask')
const container = document.getElementById('container')

function createTask() {
    if (writeTask.value == '') {
        alert('No tasks identified')
    } else {
    const p = document.createElement('p')
    p.innerText = writeTask.value
    p.style.marginTop = '20px'
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.style.marginTop = '20px'
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            p.style.textDecoration = 'line-through'
        } else {
            p.style.textDecoration = 'none'
        }
    })

    const br = document.createElement('br')
    const button = document.createElement('button')
    button.innerHTML = '<b>X</b>'
    button.addEventListener('click', () => {
        button.remove()
        p.remove()
        checkbox.remove()
        br.remove()
    })

    container.appendChild(checkbox)
    container.appendChild(p)
    p.appendChild(button)
    p.appendChild(br)
    writeTask.value = ''
    }
}

writeTask.addEventListener('keydown', function(event) {
    if (event.keyCode === 13) {
    event.preventDefault()
    addTask.click()
    }
})