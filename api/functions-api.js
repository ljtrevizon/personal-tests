//Auth
var token = ""

/**
 * Sends user login data to the server for authentication.
 *
 * @param {Object} form - The form object containing the login data.
 * @param {string} username_id - The ID of the username input field.
 * @param {string} password_id - The ID of the password input field.
 */
function envioUserLogin(form, img_id) {
    if (form.username.value == "" || form.password.value == "") {
        alert("Error")
    } else {
        var body = {
            username: form.username.value,
            password: form.password.value
        }
        const grant_type = "grant-type=&username=" + body.username + "&password=" + body.password + "&scope=&client_id=&client_secret="
        fetch("http://localhost:8000/api/login", {
            method: "POST",
            body: new URLSearchParams(grant_type),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
            .then((resp) => resp.json())
            .then(function (resp) {    
                if (resp.status !== 200) {
                    alert("Error")
                } else {
                    token = resp.access_token
                    fetch("http://localhost:8000/api/image/file/avatar/" + body.username)
                    .then(function (resp) {
                        document.getElementById(img_id).src = resp.url
                        console.log(resp)
                    })
                }

            })

    }
}

//Post

/**
 * Sends user data to the server for creation.
 *
 * @param {Object} form - The form object containing the user data.
 * @param {string} user_password_id - The id of the user password input field.
 * @param {string} username_id - The id of the username input field.
 * @param {string} name_id - The id of the name input field.
 */

function envioPostUser(form, user_password_id, username_id, name_id) {
    if (form.name.value == "" || form.username.value == "" || form.user_password.value == "") {
        alert("Error")
    } else {
        var body = {
            name: form.name.value,
            username: form.username.value,
            user_password: form.user_password.value
        }
        var formData = new FormData();
        formData.append("file", form.file.files[0])
        qs = "name=" + body.name + "&username=" + body.username + "&user_password=" + body.user_password
        url = "http://127.0.0.1:8000/api/user?" + qs
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(function (resp) {
                if (resp.ok) {
                    alert("Usuario creado")
                }

            })
        document.getElementById(user_password_id).value = ""
        document.getElementById(username_id).value = ""
        document.getElementById(name_id).value = ""
    }
}

function envioPostImagen(form) {
    console.log(form.file.value)
    nombre_file = form.file.value.split('\\')
    extension = form.file.value.split('.')
    var formData = new FormData();
    formData.append("file", form.file.files[0])
    fetch("http://127.0.0.1:8000/api/image/upload/images", {
        method: "POST",
        body: formData
    })
        .then(function (resp) {
            if (resp.ok) {
                alert("Imagen subida")
            }

        })
}

/**
 * Sends a POST request to create a team.
 *
 * @param {object} form - The form object containing the input values.
 * @param {string} league_id - The ID of the league input element.
 * @param {string} stadium_id - The ID of the stadium input element.
 * @param {string} name_id - The ID of the name input element.
 * @return {undefined} No return value.
 */
function envioPostTeam(form, league_id, stadium_id, name_id) {
    if (form.name.value == "" || form.league.value == "" || form.stadium.value == "") {
        alert("Error")
    } else {
        var body = {
            name: form.name.value,
            league: form.league.value,
            stadium: form.stadium.value
        }
        fetch("http://localhost:8000/api/team", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
            .then(function (data) {
                if (data.ok) {
                    alert("Equipo creado")
                }
            })
        document.getElementById(stadium_id).value = ""
        document.getElementById(league_id).value = ""
        document.getElementById(name_id).value = ""
    }
}

//Put

/**
 * Updates a user's information and sends it to the server.
 *
 * @param {Object} form - the form containing the user's information
 * @param {string} user_password_id - the id of the user's password field
 * @param {string} username_id - the id of the username field
 * @param {string} name_id - the id of the name field
 * @param {string} id_id - the id of the id field
 * @return {undefined} this function does not return a value
 */

function envioPutUser(form, user_password_id, username_id, name_id, id_id) {
    if (form.name.value == "" || form.username.value == "" || form.user_password.value == "") {
        alert("Error")
    } else {
        var body = {
            id: parseInt(form.id.value),
            name: form.name.value,
            username: form.username.value,
            user_password: form.user_password.value
        }
        fetch("http://localhost:8000/api/user/" + body.id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
            .then(function (data) {
                if (data.ok) {
                    alert("Usuario actualizado")
                }
            })
        document.getElementById(id_id).value = ""
        document.getElementById(user_password_id).value = ""
        document.getElementById(username_id).value = ""
        document.getElementById(name_id).value = ""
    }
}

function envioPutTeam(form, stadium_id, league_id, name_id, id_id) {
    if (form.name.value == "" || form.league.value == "" || form.stadium.value == "") {
        alert("Error")
    } else {
        var body = {
            id: parseInt(form.id2.value),
            name: form.name.value,
            league: form.league.value,
            stadium: form.stadium.value
        }
        fetch("http://localhost:8000/api/team/" + body.id, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token
            }
        })
            .then(function (data) {
                if (data.ok) {
                    alert("Usuario actualizado")
                }
            })
        document.getElementById(id_id).value = ""
        document.getElementById(stadium_id).value = ""
        document.getElementById(league_id).value = ""
        document.getElementById(name_id).value = ""
    }
}

//Get

/**
 * Fetches all user data from the API server.
 *
 * @param {undefined} - This does not request a value
 * @return {undefined} This function does not return a value
 */
function envioUserGetAll() {
    fetch("http://127.0.0.1:8000/api/user", {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
        .then((resp) => resp.json())
        .then(function (resp) {
            i = 0
            while (i < resp.length) {
                $("#tableUser").append(
                    "<tr>",
                    "<td>" + resp[i].id + "</td>",
                    "<td>" + resp[i].name + "</td>",
                    "<td>" + resp[i].username + "</td>",
                    "</tr>"
                )
                i++
            }

        })
}

/**
 * Fetches all user data from the API server.
 *
 * @param {undefined} - This does not request a value
 * @return {undefined} This function does not return a value
 */
function envioTeamGetAll() {
    fetch("http://127.0.0.1:8000/api/team", {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
        .then((resp) => resp.json())
        .then(function (resp) {
            i = 0
            while (i < resp.length) {
                $("#tableTeam").append(
                    "<tr>",
                    "<td>" + resp[i].id + "</td>",
                    "<td>" + resp[i].name + "</td>",
                    "<td>" + resp[i].league + "</td>",
                    "<td>" + resp[i].stadium + "</td>",
                    "</tr>"
                )
                i++
            }

        })
}

/**
 * Retrieves a user from the server using the provided form, user ID input field,
 * and username input field.
 *
 * @param {HTMLFormElement} form - The form containing the user ID input field.
 * @param {string} nombre_id - The ID of the HTML element that represents the name input field.
 * @param {string} username_id - The ID of the HTML element that represents the username input field.
 * @return {void} This function does not return anything.
 */

function envioGetUserByID(form, nombre_id, username_id) {
    var id = form.id.value
    var name = document.getElementById(nombre_id)
    var username = document.getElementById(username_id)
    fetch("http://127.0.0.1:8000/api/user/" + id, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
        .then((resp) => resp.json())
        .then(function (data) {
            if (data.status !== 500) {
                alert("Usuario encontrado")
                obj = data
                console.log(obj.name)
                name.value = obj.name
                username.value = obj.username
            }
        })
}

/**
 * Retrieves team information by ID from the API and populates the form fields with the retrieved data.
 *
 * @param {Object} form - The form object containing the input fields.
 * @param {string} nombre_id - The ID of the name input field.
 * @param {string} league_id - The ID of the league input field.
 * @param {string} stadium_id - The ID of the stadium input field.
 * @return {void}
 */

function envioGetTeamByID(form, nombre_id, league_id, stadium_id) {
    var id = form.id.value
    var name = document.getElementById(nombre_id)
    var league = document.getElementById(league_id)
    var stadium = document.getElementById(stadium_id)
    fetch("http://127.0.0.1:8000/api/team/" + id, {
        headers: {
            "Authorization": "Bearer " + token
        }
    })
        .then((resp) => resp.json())
        .then(function (data) {
            if (data.status !== 500 || data.status !== 404) {
                alert("Equipo encontrado")
                obj = data
                console.log(obj.name)
                name.value = obj.name
                league.value = obj.league
                stadium.value = obj.stadium
            } else if (data.status === 404) {
                alert("Equipo no encontrado")
            } else if (data.status === 500) {
                alert("Error")
            }
        })
}

function envioImgGetAll() {
    fetch("http://127.0.0.1:8000/api/image/file")
        .then((resp) => resp.json())
        .then(function (resp) {
            i = 0
            while (i < resp.length) {
                $("#tableIMG").append(
                    "<tr>",
                    "<td>" + resp[i].id + "</td>",
                    "<td>" + resp[i].name + "</td>",
                    "</tr>"
                )
                i++
            }

        })
}

function envioImgGetID(form, img_id) {
    var id = form.id.value
    var img = document.getElementById(img_id)
    fetch("http://127.0.0.1:8000/api/image/file/" + id)
        .then(function (resp) {
            img.src = resp.url
            console.log(resp)
        })
}

//Delete

/**
 * Deletes a user by their ID.
 *
 * @param {object} form - The form object containing the user ID.
 * @return {undefined} This function does not return a value.
 */

function envioDeleteUserByID(form) {
    var id = form.id.value
    fetch("http://127.0.0.1:8000/api/user/" + id, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + token
        }
    })
        .then(function (data) {
            if (data.status !== 500) {
                alert("Usuario eliminado con exito")
            }
        })
}

/**
 * Deletes all users from the API.
 *
 * @param {type}  - description of parameter
 * @return {type} description of return value
 */

function envioDeleteUserAll() {
    fetch("http://127.0.0.1:8000/api/user", {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + token
        }
    })
        .then(function (data) {
            if (data.status !== 500) {
                alert("Usuarios eliminados con exito")
            }
        })
}

/**
 * Deletes a team by their ID.
 *
 * @param {object} form - The form object containing the team ID.
 * @return {undefined} This function does not return a value.
 */

function envioDeleteTeamByID(form) {
    var id = form.id.value
    fetch("http://127.0.0.1:8000/api/team/" + id, {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + token
        }
    })
        .then(function (data) {
            if (data.status !== 500) {
                alert("Equipo eliminado con exito")
            }
        })
}

/**
 * Deletes all teams from the API.
 *
 * @param {type}  - description of parameter
 * @return {type} description of return value
 */

function envioDeleteTeamAll() {
    fetch("http://127.0.0.1:8000/api/team", {
        method: "DELETE",
        headers: {
            "Authorization": "Bearer " + token
        }
    })
        .then(function (data) {
            if (data.status !== 500) {
                alert("Equipos eliminados con exito")
            }
        })
}