//Deezer

var llave = "3a60105bb7msh8dc9fbe2b106cacp1b316fjsnbf21f23983aa"


/**
 * Retrieves album information from Deezer API and updates the album image.
 *
 * @param {string} id_album - The ID of the album element.
 * @param {string} img_album - The ID of the album image element.
 * @return {undefined} This function does not return a value.
 */
function album(id_album,img_album) {
    var album_id = document.getElementById(id_album).value
    var album_img = document.getElementById(img_album)
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://deezerdevs-deezer.p.rapidapi.com/album/' + album_id,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': llave,
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        },
    };
    $.ajax(settings).done(function (response) 
    {
        album_img.src = response.cover_medium
        console.log(response);
    });
}

// Generar contraseñas


/**
 * Selects a random element from the given array.
 *
 * @param {Array} arr - The array from which to select a random element.
 * @return {*} - The randomly selected element.
 */
function pass(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}



/**
 * Generates a password based on the provided length and assigns it to an HTML element.
 *
 * @param {string} id_longitud - The ID of the HTML input element that contains the desired password length.
 * @param {string} id_variable - The ID of the HTML element where the generated password will be assigned.
 * @return {string} The generated password.
 */
function password_generate(id_longitud,id_variable) {
    var longitud = parseInt(document.getElementById(id_longitud).value)
    minus = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,"
    mayus = minus.toUpperCase()
    simbolos = "!,#,$,%,&,',(,),*,+,-,.,/,:,;,<,=,>,?,@,[,],^,_,`,{,|,},~,"
    numeros = "0,1,2,3,4,5,6,7,8,9"
    base = minus + mayus + simbolos + numeros
    arr = base.split(",")
    console.log(arr)
    i = 1
    arr2 = []
    while (i <= longitud) {
        arr2.push(pass(arr))
        i++
    }
    password = arr2.join("")
    console.log(password)
    return document.getElementById(id_variable).innerHTML = password
    
}