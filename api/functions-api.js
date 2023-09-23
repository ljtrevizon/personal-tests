//Fetch
var token

function envioUserLogin(form, username_id, password_id) {
    if (form.username.value == "" || form.password.value == "") {
        alert("Error")
    } else {
        var body = {
            username: form.username.value,
            password: form.password.value
        }
        fetch("http://localhost:8000/api/user/login", {
            method: "POST",
            body: form
        })
            .then(function (data) {
                if (data.ok) {
                    console.log(data)
                    alert("Usuario logeado")
                }
            })
        document.getElementById(password_id).value = ""
        document.getElementById(username_id).value = ""
    }
}

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
//Editar Usuario
function envioPutUser(form, user_password_id, username_id, name_id, id_id, token) {
    if (form.name.value == "" || form.username.value == "" || form.user_password.value == "") {
        alert("Error")
    } else {
        var body = {
            name: form.name.value,
            username: form.username.value,
            user_password: form.user_password.value
        }
        fetch("http://localhost:8000/api/user/" + document.getElementById(id_id).value, {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "Authentication": "Bearer " + token
            }
        })
            .then(function (data) {
                if (data.ok) {
                    alert("Usuario creado")
                }
            })
        document.getElementById(id_id).value = ""
        document.getElementById(user_password_id).value = ""
        document.getElementById(username_id).value = ""
        document.getElementById(name_id).value = ""
    }
}