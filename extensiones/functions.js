

//Random dog and random cat

/**
 * Fetches a random cat image from an API and displays it in the specified image element.
 *
 * @param {string} imgCat_id - The id of the image element where the cat image will be displayed.
 * @return {undefined} This function does not return anything.
 */
function randomCat(imgCat_id) {
    var imgCat = document.getElementById(imgCat_id)
    fetch("https://api.thecatapi.com/v1/images/search")
        .then((resp) => {
            return resp.json()
        })
        .then(function (data) {
            obj = data[0]
            imgCat.src = obj.url
        })
}
/**
 * Fetches a random dog image from thedogapi.com and sets it as the source of the specified image element.
 *
 * @param {string} imgDog_id - The ID of the image element to set the source of.
 * @return {undefined} This function does not return a value.
 */
function randomDog(imgDog_id) {
    var imgDog = document.getElementById(imgDog_id)
    fetch("https://api.thedogapi.com/v1/images/search")
        .then((resp) => {
            return resp.json()
        })
        .then(function (data) {
            obj = data[0]
            imgDog.src = obj.url
        })
}


//Paises


/**
 * Fetches country data based on the provided country code and updates the flag image and official name fields.
 *
 * @param {string} bandera_id - The ID of the flag element.
 * @param {string} official_name_id - The ID of the official name element.
 * @param {string} codigo_id - The ID of the country code input element.
 * @return {undefined} This function does not return a value.
 */

function pais(bandera_id,official_name_id,codigo_id) {
    var bandera = document.getElementById(bandera_id)
    var official_name = document.getElementById(official_name_id)
    var codigo = document.getElementById(codigo_id).value
    console.log(codigo)
    var options = {
        method: 'GET',
        headers: {
            'X-BLOBR-KEY': 'W11uenfx74einbeCI3qbU0NKWTy4eGOY'
        },
    };
    var url = 'https://apis.thatapicompany.com/9diyyzzwr4w8bf4r/countries/' + codigo
    fetch(url, options)
        .then((resp) => {
            return resp.json()
        })
        .then(function (data) {
            obj = data
            bandera.src = obj.flag_urls.svg
            official_name.value = obj.official_name
            console.log(obj.flag_urls.svg)
        })
        .catch(err => console.error(err));
}

//Deezer

/**
 * Retrieves album information from Deezer API and updates the album image.
 *
 * @param {string} id_album - The ID of the album element.
 * @param {string} img_album - The ID of the album image element.
 * @return {undefined} This function does not return a value.
 */
function album(id_album,img_album) {
    var llave = "3a60105bb7msh8dc9fbe2b106cacp1b316fjsnbf21f23983aa"
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