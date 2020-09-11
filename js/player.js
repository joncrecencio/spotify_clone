const audioPlayer = document.querySelector("#audioplayer")
const loaded = false;

const playBtn = document.querySelector("#playBtn")
const pauseBtn = document.querySelector("#pauseBtn")


pauseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    playBtn.style.display = "inline"
    pauseBtn.style.display = "none"


    return false
})

const playSong = (file) => {
    if(loaded == false){
        audioPlayer.innerHTML = `<source src="${file}" type = audio/mp3>`
        loaded = true
    }

    audioPlayer.play()

    playBtn.style.display = "none"
    pauseBtn.style.display = "inline"
}

document.querySelectorAll('.main__col').forEach(item => {
    item.addEventListener('click', () => {
        let image = item.getAttribute('data-image')
        let artist = item.getAttribute('data-artist')
        let song = item.getAttribute('data-song')
        let file = item.getAttribute('data-file')

    })
})