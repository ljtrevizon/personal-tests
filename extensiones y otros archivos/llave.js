var llave = "3a60105bb7msh8dc9fbe2b106cacp1b316fjsnbf21f23983aa"
var img_album = document.getElementById("img_album")
function album() {
    var album_id = document.getElementById("album_id").value
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://deezerdevs-deezer.p.rapidapi.com/album/' + album_id,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': llave,
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };
    $.ajax(settings).done(function (response) {
        img_album.src = response.cover_medium
        console.log(response);
    });
}