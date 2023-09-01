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
 * Generates a password with a specified length.
 *
 * @param {number} num4 - The length of the password to generate.
 * @return {string} The generated password.
 */
function password_generate(longitud) {
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
    return password
}