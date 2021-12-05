function validar() {

    const usuario = 'user'
    const pass = 'pass'

    var get_nome = document.getElementById('get_nome')
    get_nome = get_nome.value

    var get_senha = document.getElementById('get_senha')
    get_senha = get_senha.value


    if (get_nome == usuario && get_senha == pass) {
        //alert("Deu certo")
        window.location.assign("menu.php")
    } else {
        window.alert("Usuario e/ou get_senha errado(s)")
    }
}