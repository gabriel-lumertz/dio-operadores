function getAdmins(map) {
    let admins = []
    for([key, value] of map) {
        if(value === 'Admin') {
            admins.push(key)
        }
    }
    return admins
}

const   usuarios = new Map()

usuarios.set ('Gabriel',  'Admin')
usuarios.set ('Nusa',  'Admin')
usuarios.set ('Samuel',  'User')
usuarios.set ('Rafael',  'Admin')

console.log(getAdmins(usuarios))