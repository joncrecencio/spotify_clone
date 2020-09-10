const playListsSidebar = document.querySelector(".sidebar__playlists")

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

playlistPrimeira.forEach((playlist) => {
    playListsSidebar.innerHTML += `<a href="#">${playlist.nome}</a>`
})