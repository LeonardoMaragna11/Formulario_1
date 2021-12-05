function validar() {
    const usuario = 'user'
    const pass = 'pass'
    var nome = document.getElementById('nome')
    nome = nome.value
    var senha = document.getElementById('senha')
    senha = senha.value


    if(nome == usuario && senha == pass){
        //window.alert("Deu certo")
        // window.location.replace("menu.html")
        window.location.replace("https://www.google.com")
    }else{
        window.alert("Usuario e/ou senha errado(s)")
    }
}