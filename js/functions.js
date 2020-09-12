const playListsSidebar = document.querySelector(".sidebar__playlists")
const musicasParadas = document.querySelector(".main__row")
const musicasPlaylists = document.querySelector("#musicas__tocadas")


const playlistPrimeira = [
    {
        nome: "Playlist - Favoritas"
    },
    {
        nome: "Playlist - Rock"
    },
    {
        nome: "Playlist - Gospel"
    },
    {
        nome: "Playlist - Ed Sheeran"
    },
    {
        nome: "Playlist - Pentatonix"
    },
    {
        nome: "Playlist - Programar"
    },
]

const imagensMusicas = [
    {
        urlImage:"./img/top50.png",
        nameImage:"As 50 mais tocadas",
        dataSong: "Top 50",
        dataFiles: "./assets/perfect_edsheeran.mp3",
        titleMusic:"As 50 mais tocadas",
        descriptionMusic: "Ouça agora as 50 mais tocadas"
    },

    {
        urlImage:"./img/edsheeran.jpg",
        nameImage:"Ed Sheeran",
        dataSong: "Perfect",
        dataFiles: "./assets/perfect_edsheeran.mp3",
        titleMusic:"Perfect",
        descriptionMusic: "Ouça agora Perfect de Ed Sheeran"
    },

    {
        urlImage:"./img/gunsrools.png",
        nameImage:"Guns N' Roses",
        dataSong: "Sweet Child Of Mine",
        dataFiles: "./assets/music.mp3",
        titleMusic:"Sweet Child Of Mine",
        descriptionMusic: "Ouça agora o álbum de Guns N' Roses"
    },
    {
        urlImage:"./img/top50.png",
        nameImage:"As 50 mais tocadas",
        dataSong: "Top 50",
        dataFiles: "./assets/perfect_edsheeran.mp3",
        titleMusic:"As 50 mais tocadas",
        descriptionMusic: "Ouça agora as 50 mais tocadas"
    },

    {
        urlImage:"./img/edsheeran.jpg",
        nameImage:"Ed Sheeran",
        dataSong: "Perfect",
        dataFiles: "./assets/perfect_edsheeran.mp3",
        titleMusic:"Perfect",
        descriptionMusic: "Ouça agora Perfect de Ed Sheeran"
    },

    {
        urlImage:"./img/gunsrools.png",
        nameImage:"Guns N' Roses",
        dataSong: "Sweet Child Of Mine",
        dataFiles: "./assets/music.mp3",
        titleMusic:"Sweet Child Of Mine",
        descriptionMusic: "Ouça agora o álbum de Guns N' Roses"
    },
    {
        urlImage:"./img/top50.png",
        nameImage:"As 50 mais tocadas",
        dataSong: "Top 50",
        dataFiles: "./assets/perfect_edsheeran.mp3",
        titleMusic:"As 50 mais tocadas",
        descriptionMusic: "Ouça agora as 50 mais tocadas"
    },

    {
        urlImage:"./img/edsheeran.jpg",
        nameImage:"Ed Sheeran",
        dataSong: "Perfect",
        dataFiles: "../assets/perfect_edsheeran.mp3",
        titleMusic:"Perfect",
        descriptionMusic: "Ouça agora Perfect de Ed Sheeran"
    },
]

const imagensMusicasPlaylist = [
    {
        urlImage:"./img/edsheeran.jpg",
        nameImage:"Ed Sheeran",
        dataSong: "Perfect",
        dataFiles: "./assets/perfect_edsheeran.mp3",
        titleMusic:"Perfect",
        descriptionMusic: "Ouça agora Perfect de Ed Sheeran"
    },

    {
        urlImage:"./img/gunsrools.png",
        nameImage:"Guns N' Roses",
        dataSong: "Perfect",
        dataFiles: "./assets/music.mp3",
        titleMusic:"Sweet Child Of Mine",
        descriptionMusic: "Ouça agora o álbum de Guns N' Roses"
    },
]

function renderPlaylistsFavorite(){
        playlistPrimeira.forEach((playlist) => {
            playListsSidebar.innerHTML += `<a href="#">${playlist.nome}</a>`
    })
}

function renderParadas(){
        imagensMusicas.forEach((photoAlbum) => {
            musicasParadas.innerHTML += `<div class="main__col" data-image = "${photoAlbum.urlImage}" data-artist = "${photoAlbum.nameImage}" data-song = "${photoAlbum.dataSong}" data-file = "${photoAlbum.dataFiles}" >

            <img src="${photoAlbum.urlImage}" alt="${photoAlbum.nameImage}">
            <h3>${photoAlbum.titleMusic}</h3>
            <p>${photoAlbum.descriptionMusic}</p></div>`
    })
}

function renderMusicasTocadas(){
    imagensMusicasPlaylist.forEach((photoAlbum) => {
        musicasPlaylists.innerHTML += `<div class="main__col" data-image = "${photoAlbum.urlImage}" data-artist = "${photoAlbum.nameImage}" data-song = "${photoAlbum.dataSong}" data-file = "${photoAlbum.dataFiles}" >

            <img src="${photoAlbum.urlImage}" alt="${photoAlbum.nameImage}">

            <h3>${photoAlbum.titleMusic}</h3>
            <p>${photoAlbum.descriptionMusic}</p>
        </div>`
    })
}

renderPlaylistsFavorite()
renderParadas()
renderMusicasTocadas()

const audioPlayer = document.querySelector("#audioplayer")
var loaded = false
const playBtn = document.querySelector("#playBtn")
const pauseBtn = document.querySelector("#pauseBtn")

pauseBtn.addEventListener("click", (e) => {
    e.preventDefault();
    playBtn.style.display = "inline"
    pauseBtn.style.display = "none"
    audioPlayer.pause()
    return false
})

playBtn.addEventListener('click',(e)=>{
    e.preventDefault()

    playBtn.style.display = "none"
    pauseBtn.style.display = "inline"
    audioPlayer.play()
    return false
})

const playSong = (file) => {
    if(loaded == false){
        audioPlayer.innerHTML = `<source src="${file}" type="audio/mp3" />`
        loaded = true
    }
    else{
        audioPlayer.innerHTML = `<source src="${file}" type="audio/mp3" />`
        loaded = false
    }

    playBtn.style.display = "none";
    pauseBtn.style.display = "inline";
    
    audioPlayer.load()

}


 document.querySelectorAll('.main__col').forEach(item => {

    item.addEventListener('click', event =>{
        let image = [item.getAttribute('data-image')]
        let artist = [item.getAttribute('data-artist')]
        let song = [item.getAttribute('data-song')]
        let file = [item.getAttribute('data-file')]

        var playerArtistComponent = document.getElementsByClassName('player__artist')

            playerArtistComponent[0].innerHTML = `
            <img src="${image}" />
            <h3>${artist}<br/><span>${song}</span></h3>

        `
        playSong(file)
        console.log(playerArtistComponent)
    })
    

})




