function faz_login(event){
    event.preventDefault()
    const email = document.getElementById("email").value
    const password = document.getElementById("senha").value

    if(email == "helena.zacarias111@gmail.com" && password == "1234"){
        alert('Login realizado com sucesso!')
        window.location.href = "nova.htm"
    }else{
        alert('Usuário não cadastrado ou senha incorreta')
    }
}