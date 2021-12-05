function valida () {
    const usuario = 'user'
    const pass = 'pass'

    
    var get_nome = document.getElementById('nome')
    get_nome = nome.value

    var get_senha = document.getElementById('senha')
    get_senha = senha.value


    if(get_nome == usuario && get_senha == pass){
        alert("Deu certo")
        //window.location.replace("https://www.google.com")
    }else{
        window.alert("Usuario e/ou senha errado(s)")
    }
}