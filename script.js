

function load(path) {
  fetch(path).then(res => {
    res.json().then(render)
  })
}

function render(data) {
  buttons.innerHTML = ''
  for (let item of data.items) {
    const button = document.createElement('button')
    const audio = document.createElement('audio')
    audio.src = `${data.path}${item}.wav`
    button.innerText = item
    button.addEventListener('mousedown', () => {
      audio.currentTime = 0
      audio.play()
    })
    audio.addEventListener('durationchange', () => {
      button.innerHTML = `<b>${item}</b><br>(${(audio.duration * 1000).toFixed(0)}ms)`
    })
    audio.addEventListener('play', () => {
      button.classList.add('active')
    })
    audio.addEventListener('ended', () => {
      button.classList.remove('active')
    })
    buttons.appendChild(button)
  }
}
