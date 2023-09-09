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

function pais(bandera_id, official_name_id, codigo_id) {
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
            bandera.src = obj.flag_urls.png
            official_name.value = obj.official_name
            console.log(obj.flag_urls.png)
        })
        .catch(err => console.error(err));
}

//Deezer


/**
 * Retrieves album information from the Deezer API and updates the corresponding elements on the page.
 *
 * @param {string} id_album - The ID of the input element that contains the album ID.
 * @param {string} img_album - The ID of the image element that will display the album cover.
 * @param {string} artist_id - The ID of the input element that will display the artist name.
 * @param {string} album_name_id - The ID of the input element that will display the album name.
 * @return {undefined} This function does not return a value.
 */

function album(id_album, img_album, artist_id, album_name_id) {
    var llave = "3a60105bb7msh8dc9fbe2b106cacp1b316fjsnbf21f23983aa"
    var album_id = document.getElementById(id_album).value
    var album_img = document.getElementById(img_album)
    var artist = document.getElementById(artist_id)
    var album_name = document.getElementById(album_name_id)
    var settings = {
        async: true,
        crossDomain: true,
        url: 'https://deezerdevs-deezer.p.rapidapi.com/album/' + album_id,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': llave,
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        },
    };
    $.ajax(settings).done(function (response) {
        album_img.src = response.cover_medium
        artist.value = response.artist.name
        album_name.value = response.title
        console.log(response);
    });
}

/**
 * Retrieves track information from Deezer API and updates the UI elements.
 *
 * @param {string} id_track - The id of the track input element.
 * @param {string} id_audio - The id of the audio element.
 * @param {string} id_title - The id of the title input element.
 * @param {string} id_artist - The id of the artist input element.
 * @returns {void} This function does not return a value.
 */

function track(id_track, id_audio, id_title, id_artist) {
    var track = document.getElementById(id_track).value
    var audio = document.getElementById(id_audio)
    var title = document.getElementById(id_title)
    var artist = document.getElementById(id_artist)
    var llave = "3a60105bb7msh8dc9fbe2b106cacp1b316fjsnbf21f23983aa"
    const settings = {
        async: true,
        crossDomain: true,
        url: 'https://deezerdevs-deezer.p.rapidapi.com/track/' + track,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': llave,
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }
    };

    $.ajax(settings).done(function (response) {
        audio.src = response.preview
        title.value = response.title
        artist.value = response.artist.name
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
function password_generate(id_longitud, id_variable) {
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
//Conversor

/**
 * Converts a temperature in Celsius to Fahrenheit and Kelvin.
 *
 * @param {string} c - The id of the input element containing the Celsius temperature.
 * @param {string} f - The id of the input element where the Fahrenheit temperature will be displayed.
 * @param {string} k - The id of the input element where the Kelvin temperature will be displayed.
 * @return {undefined} This function does not return a value.
 */
function temp(c, f, k) {
    var celsius = parseInt(document.getElementById(c).value)
    var fahrenheit = (celsius * 9 / 5) + 32
    var kelvin = celsius + 273.15
    document.getElementById(f).value = fahrenheit
    document.getElementById(k).value = kelvin
    return console.log(fahrenheit + " y " + kelvin)
}

// Equipos


/**
 * Generates the values for the "nombre_liga" and "nro_champ_lib" input fields based on the selected "equipo" value.
 *
 * @param {string} equipo_id - The id of the "equipo" input field.
 * @param {string} nombre_liga_id - The id of the "nombre_liga" input field.
 * @param {string} nro_champ_lib_id - The id of the "nro_champ_lib" input field.
 * @return {void} No return value.
 */
function equipos(equipo_id, nombre_liga_id, nro_champ_lib_id) {
    var nombre_liga = document.getElementById(nombre_liga_id)
    var nro_champ_lib = document.getElementById(nro_champ_lib_id)
    var equipo = document.getElementById(equipo_id).value
    if (equipo == "barc") {
        nombre_liga.value = "LaLiga"
        nro_champ_lib.value = 5
    }
    if (equipo == "madr") {
        nombre_liga.value = "LaLiga"
        nro_champ_lib.value = 14
    }
    if (equipo == "riv-pl") {
        nombre_liga.value = "Liga de Futbol Profesional (Argentina)"
        nro_champ_lib.value = 4
    }
    if (equipo == "boc-jr") {
        nombre_liga.value = "Liga de Futbol Profesional (Argentina)"
        nro_champ_lib.value = 6
    }
    if (equipo == "man-city") {
        nombre_liga.value = "Premier League"
        nro_champ_lib.value = 1
    }
    if (equipo == "atl-madr") {
        nombre_liga.value = "LaLiga"
        nro_champ_lib.value = 0
    }
    if (equipo == "psg") {
        nombre_liga.value = "Ligue One"
        nro_champ_lib.value = 0
    }
    if (equipo == "man-utd") {
        nombre_liga.value = "Premier League"
        nro_champ_lib.value = 3
    }
    if (equipo == "liver") {
        nombre_liga.value = "Premier League"
        nro_champ_lib.value = 6
    }
    if (equipo == "dortm") {
        nombre_liga.value = "Bundesliga"
        nro_champ_lib.value = 0
    }
    if (equipo == "bay-mun") {
        nombre_liga.value = "Bundesliga"
        nro_champ_lib.value = 5
    }
    return console.log(equipo)
}

//Promedio

/**
 * Calculates the average of a set of numbers.
 *
 * @param {string} promnum_id - The ID of the HTML input element that contains the number of values to be averaged.
 * @return {undefined} This function does not return a value.
 */
function promedio(promnum_id) {
    var i = 0
    var promnum = parseFloat(document.getElementById(promnum_id).value)
    var notas = []
    var promedio
    var p2
    console.log(promnum)
    if (promnum == 0 || promnum - Math.floor(promnum) !== 0 || isNaN(promnum)) {
        p2 = document.getElementById("p2").innerHTML = "Error."
    } else {
        while (i < promnum) {
            nota = parseInt(prompt("Agregue la nota " + (i + 1)))
            notas.push(nota)
            console.log(nota)
            console.log(notas)
            i++
        }
        promedio = (notas.reduce((curr, prev) => curr + prev, 0)) / promnum
        p2 = document.getElementById("p2").innerHTML = "El promedio es: " + promedio.toFixed(2)
        console.log(promedio)
    }
}

//Aumento y Descuento

/**
 * Calculates the new salary based on the current salary and a percentage increase.
 *
 * @param {string} sueldo_id - The ID of the input field that contains the current salary.
 * @param {string} porcent_id - The ID of the input field that contains the percentage increase.
 * @param {string} p_id - The ID of the element where the result will be displayed.
 * @return {undefined} No return value.
 */
function calculateNewSalary(sueldo_id, porcent_id, p_id) {
    var currentSalary = parseFloat(document.getElementById(sueldo_id).value);
    var percentageIncrease = parseFloat(document.getElementById(porcent_id).value);
    var newSalary = currentSalary + (currentSalary * (percentageIncrease / 100))

    if (currentSalary == 0 || isNaN(currentSalary) || percentageIncrease == 0 || isNaN(percentageIncrease)) {
        document.getElementById(p_id).innerHTML = "Error.";
    } else {
        document.getElementById(p_id).innerHTML = "El nuevo sueldo es: " + newSalary;
    }
    return console.log(newSalary)
}
/**
 * Calculates the new salary after applying a discount.
 *
 * @param {string} sueldo_id - The ID of the input field for the current salary.
 * @param {string} porcent_id - The ID of the input field for the percentage decrease.
 * @param {string} p_id - The ID of the HTML element to display the result.
 * @return {undefined} The function does not return a value.
 */
function calculateDiscount(sueldo_id, porcent_id, p_id) {
    var currentSalary = parseFloat(document.getElementById(sueldo_id).value);
    var percentageDecrease = parseFloat(document.getElementById(porcent_id).value);
    var newSalary = currentSalary - (currentSalary * (percentageDecrease / 100))
    if (currentSalary == 0 || isNaN(currentSalary) || percentageDecrease == 0 || isNaN(percentageDecrease)) {
        document.getElementById(p_id).innerHTML = "Error.";
    } else {
        document.getElementById(p_id).innerHTML = "El nuevo sueldo es: " + newSalary;
    }
    return console.log(newSalary)
}

//Colores

/**
 * Changes the color of an element based on the value of a color input.
 *
 * @param {string} color_id - The ID of the color input element.
 * @param {string} p_id - The ID of the element whose color will be changed.
 * @return {undefined} The function does not return a value.
 */
function changeColor(color_id, p_id) {
    var color = document.getElementById(color_id).value;
    $('#' + p_id).css("color", color);
    console.log(color);
    if (color == "#ffffff") {
        $('#' + p_id).css("background-color", "black");
    } else {
        $('#' + p_id).css("background-color", "white");
    }
    document.getElementById(p_id).innerHTML = "El codigo HEX es: " + color;
    return console.log(color)
}

//Datos

/**
 * Create a new instance of the Nombre class.
 *
 * @param {string} nombre - The name of the person.
 * @param {number} edad - The age of the person.
 * @param {string} grado - The grade of the person.
 * @param {number} cedula - The ID number of the person.
 * @param {string} sexo - The gender of the person.
 * @param {string} telefono - The phone number of the person.
 * @return {void}
 */
function Nombre(nombre, edad, grado, cedula, sexo, telefono) {
    this.nombre = nombre,
        this.edad = edad,
        this.grado = grado,
        this.cedula = cedula,
        this.sexo = sexo
    this.telefono = telefono
}
var nombres = []
/**
 * Executes a series of actions to retrieve input values from HTML elements,
 * validate them, and store them in the 'nombres' array.
 *
 * @param {string} nombre_id - The ID of the HTML input element for the name.
 * @param {string} edad_id - The ID of the HTML input element for the age.
 * @param {string} grado_id - The ID of the HTML input element for the grade.
 * @param {string} cedula_id - The ID of the HTML input element for the ID number.
 * @param {string} sexo_id - The ID of the HTML input element for the gender.
 * @param {string} telefono_id - The ID of the HTML input element for the phone number.
 * @return {undefined} The function does not return a value.
 */
function datos(nombre_id, edad_id, grado_id, cedula_id, sexo_id, telefono_id) {
    var nombre = document.getElementById(nombre_id).value;
    document.getElementById(nombre_id).value = "";
    var edad = parseInt(document.getElementById(edad_id).value);
    document.getElementById(edad_id).value = "";
    var grado = document.getElementById(grado_id).value;
    document.getElementById(grado_id).value = "";
    var cedula = document.getElementById(cedula_id).value;
    document.getElementById(cedula_id).value = "";
    var sexo = document.getElementById(sexo_id).value;
    document.getElementById(sexo_id).value = "";
    var telefono = document.getElementById(telefono_id).value;
    document.getElementById(telefono_id).value = "";
    if (nombre == "" || edad == 0 || isNaN(edad) || grado == "" || sexo == "" || cedula == "" || telefono == "") {
        alert("Error")
    } else {
        nombres.push(new Nombre(nombre, edad, grado, cedula, sexo, telefono));
    }
    return console.log(nombres)
}

//Github

/**
 * Fetches user data from the GitHub API and populates the corresponding fields.
 *
 * @param {string} user_id - The id of the user input element.
 * @param {string} nombre_user_id - The id of the nombre_user input element.
 * @param {string} login_id - The id of the login input element.
 * @param {string} id_id - The id of the id input element.
 * @param {string} avatar_id - The id of the avatar input element.
 * @param {string} url_user_id - The id of the url_user input element.
 * @return {undefined}
 */
function datos2(user_id, nombre_user_id, login_id, id_id, avatar_id, url_user_id) {
    var login = document.getElementById(login_id)
    var id = document.getElementById(id_id)
    var avatar = document.getElementById(avatar_id)
    var url_user = document.getElementById(url_user_id)
    var nombre_user = document.getElementById(nombre_user_id)
    var url = "https://api.github.com/users/" + document.getElementById(user_id).value
    fetch(url)
        .then((resp) => {
            if (resp.status == 404) {
                alert("El usuario no existe.")
                login.value = ""
                id.value = ""
                avatar.src = ""
                url_user.href = ""
                nombre_user.value = ""
                return false
            }
            return resp.json()

        })
        .then(function (data) {
            if (data === false) {
                return false;
            }
            obj = data
            login.value = obj.login
            id.value = obj.id
            avatar.src = obj.avatar_url
            url_user.href = obj.html_url
            if (obj.name == null) {
                nombre_user.value = "Indefinido"
            } else {
                nombre_user.value = obj.name
            }
            console.log(login)
            console.log(id)
            console.log(avatar)
            console.log(url_user)
            console.log(nombre_user)
        })
        .catch(function (error) {
            console.log(error);
        });
    return console.log("Listo")
}

//Year

/**
 * Calculates whether a given year is a leap year or not.
 *
 * @param {string} year_id - The ID of the input element that contains the year.
 * @param {string} p_id - The ID of the paragraph element where the result will be displayed.
 * @return {undefined} The function does not return a value.
 */
function year(year_id, p_id) {
    var year = parseInt(document.getElementById(year_id).value)
    console.log(year)
    if (year % 4 == 0) {
        document.getElementById(p_id).innerHTML = "El año " + year + " es bisiesto"
    } else {
        document.getElementById(p_id).innerHTML = "El año " + year + " no es bisiesto"
    }
    return console.log(year)
}

//Suma de Numeros

var suma_num = []
var resultado_num
/**
 * Calculates the sum of numbers up to a given value and displays the result.
 *
 * @param {string} nums_id - The ID of the input element that contains the number value.
 * @param {string} p_id - The ID of the paragraph element where the result will be displayed.
 * @return {undefined} The function does not return a value.
 */
function nums(nums_id, p_id) {
    suma_num = []
    var nums = parseInt(document.getElementById(nums_id).value)
    console.log(nums)
    for (i = 1; i <= nums; i++) {
        suma_num.push(i)
    }
    resultado_num = suma_num.reduce((curr, prev) => curr + prev, 0)
    document.getElementById(p_id).innerHTML = "La suma de todos los numeros hasta " + nums + " es: " + resultado_num
    return console.log(suma_num + " y su suma es " + suma_num.reduce((curr, prev) => curr + prev, 0))
}

//Multiplicacion de numeros

var suma_num2 = []
var resultado_num2
/**
 * Generates a function comment for the given function body.
 *
 * @param {string} nums_id - The ID of the input element that contains the number of elements.
 * @param {string} p_id - The ID of the paragraph element where the result will be displayed.
 * @return {boolean} Returns false if there is an error, otherwise returns true.
 */
function nums2(nums_id, p_id) {
    suma_num2 = []
    var nums = parseInt(document.getElementById(nums_id).value)
    for (i = 1; i <= nums; i++) {
        suma_num2.push(i)
    }

    resultado_num2 = suma_num2.reduce((curr, prev) => curr * prev, 1)
    if (resultado_num2 == Infinity) {
        alert("Error")
        document.getElementById(p_id).innerHTML = ""
        return false
    }
    document.getElementById(p_id).innerHTML = "La multiplicacion de todos los numeros hasta " + nums + " es: " + resultado_num2
}

//Pares e Impares

var pares = []
var impares = []
/**
 * Generates a function comment for the given function body.
 *
 * @param {string} numero_id - the ID of the input element for the number
 * @param {string} p_1_id - the ID of the element to display the even numbers
 * @param {string} p_2_id - the ID of the element to display the odd numbers
 * @return {undefined} - no return value
 */
function nums3(numero_id, p_1_id, p_2_id) {
    pares = []
    impares = []
    var i = 0
    var num3 = document.getElementById(numero_id).value
    if (num3 <= 0) {
        alert("Error")
    } else {
        while (i <= num3) {
            if (i % 2 == 0 && i !== 0) {
                pares.push(" " + i)

            } else if (i !== 0) {
                impares.push(" " + i)

            }
            i++
        }
        if (pares.length >= 150 && impares.length >= 150) {
            document.write("<link rel='stylesheet' href='extensiones/style.css' type='text/css' charset='utf-8'><h1>Numeros pares e impares</h1>")
            document.write("Los numeros pares son:" + pares + "." + "<br><br>")
            document.write("Los numeros impares son:" + impares + "." + "<hr>")
        } else {
            document.getElementById(p_1_id).innerHTML = "Los numeros pares son:" + pares + "."
            document.getElementById(p_2_id).innerHTML = "Los numeros impares son:" + impares + "."
        }
    }
    return console.log(pares) + console.log(impares)
}

//Divisores

var divisores = []
function num4(numero_id, p_id) {
    divisores = []
    var i = 0
    var num4 = document.getElementById(numero_id).value
    if (num4 <= 0) {
        alert("Error")
    } else {
        while (i <= num4) {
            if (num4 % i == 0 && i !== 0) {
                divisores.push(" " + i)
            }
            i++
        }
        document.getElementById(p_id).innerHTML = "Los numeros divisores son:" + divisores + "."
    }
    return console.log(divisores)
}
//Tasas de cambio

/**
 * Calculates the product of two numbers and displays the result on the webpage.
 *
 * @param {string} dolar_id - The id of the input field containing the dollar value.
 * @param {string} tasa_id - The id of the input field containing the exchange rate value.
 * @param {string} resultado_id - The id of the HTML element where the result will be displayed.
 * @return {undefined} The function does not return a value.
 */
function calculateDolbol(dolar_id, tasa_id, resultado_id) {
    var dol = parseFloat(document.getElementById(dolar_id).value);
    document.getElementById(dolar_id).value = "";
    var tasa = parseFloat(document.getElementById(tasa_id).value);
    document.getElementById(tasa_id).value = "";
    var resultado = dol * tasa
    if (dol == 0 || tasa == 0 || isNaN(dol) || isNaN(tasa) || dol < 0 || tasa < 0) {
        document.getElementById(resultado_id).innerHTML = 'Error';
    } else {
        document.getElementById(resultado_id).innerHTML = resultado.toFixed(2) + " Bs";
    }
    return console.log(resultado)
}
function calculateResult(tasa_id, bolivares_id, resultado_id) {
    var tasa = parseFloat(document.getElementById(tasa_id).value);
    document.getElementById(tasa_id).value = "";
    var bol = parseFloat(document.getElementById(bolivares_id).value);
    document.getElementById(bolivares_id).value = "";
    var resultado = bol / tasa

    if (bol == 0 || tasa == 0 || isNaN(bol) || isNaN(tasa) || bol < 0 || tasa < 0) {
        document.getElementById(resultado_id).innerHTML = 'Error';
    } else {
        document.getElementById(resultado_id).innerHTML = resultado.toFixed(2) + " $";
    }
    return console.log(resultado)
}