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
        urlImage:"../img/top50.png",
        nameImage:"As 50 mais tocadas",
        titleMusic:"As 50 mais tocadas",
        descriptionMusic: "Ouça agora as 50 mais tocadas"
    },

    {
        urlImage:"../img/edsheeran.jpg",
        nameImage:"Ed Sheeran - Perfect",
        titleMusic:"Divide",
        descriptionMusic: "Ouça agora Perfect de Ed Sheeran"
    },

    {
        urlImage:"../img/gunsrools.png",
        nameImage:"Guns N' Roses",
        titleMusic:"Sweet Child Of Mine",
        descriptionMusic: "Ouça agora o álbum de Guns N' Roses"
    },
    {
        urlImage:"../img/top50global.png",
        nameImage:"As 50 mais tocadas",
        titleMusic:"As 50 mais tocadas",
        descriptionMusic: "Ouça agora as 50 mais tocadas"
    },

    {
        urlImage:"../img/edsheeran.jpg",
        nameImage:"Ed Sheeran - Perfect",
        titleMusic:"Divide",
        descriptionMusic: "Ouça agora Perfect de Ed Sheeran"
    },

    {
        urlImage:"../img/gunsrools.png",
        nameImage:"Guns N' Roses",
        titleMusic:"Sweet Child Of Mine",
        descriptionMusic: "Ouça agora o álbum de Guns N' Roses"
    },
    {
        urlImage:"../img/top50global.png",
        nameImage:"As 50 mais tocadas",
        titleMusic:"As 50 mais tocadas",
        descriptionMusic: "Ouça agora as 50 mais tocadas"
    },

    {
        urlImage:"../img/edsheeran.jpg",
        nameImage:"Ed Sheeran - Perfect",
        titleMusic:"Divide",
        descriptionMusic: "Ouça agora Perfect de Ed Sheeran"
    },

]

const imagensMusicasPlaylist = [
    {
        urlImage:"../img/edsheeran.jpg",
        nameImage:"Ed Sheeran",
        dataSong: "Perfect",
        dataFiles: "../assets/perfect_edsheeran.mp3",
        titleMusic:"Perfect",
        descriptionMusic: "Ouça agora Perfect de Ed Sheeran"
    },

    {
        urlImage:"../img/gunsrools.png",
        nameImage:"Guns N' Roses",
        dataSong: "Perfect",
        dataFiles: "../assets/music.mp3",
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
            musicasParadas.innerHTML += `<div class="main__col"><img src="${photoAlbum.urlImage}" alt="${photoAlbum.nameImage}">
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

