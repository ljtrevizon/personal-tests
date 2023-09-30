//Auth
var token = ""

/**
 * Sends user login data to the server for authentication.
 *
 * @param {Object} form - The form object containing the login data.
 * @param {string} username_id - The ID of the username input field.
 * @param {string} password_id - The ID of the password input field.
 */
function envioUserLogin(form, username_id, password_id) {
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
                if (resp.error) {
                    alert("Error")
                    return false
                }
                token = resp.access_token
            })
        document.getElementById(password_id).value = ""
        document.getElementById(username_id).value = ""
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
        fetch("http://localhost:8000/api/user", {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
            }
        })
            .then(function (data) {
                if (data.ok) {
                    alert("Usuario creado")
                }
            })
        document.getElementById(user_password_id).value = ""
        document.getElementById(username_id).value = ""
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
                $("tbody").append(
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

//Delete

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