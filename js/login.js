function doLogin() {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    login(email, password)
}

function login(email, password) {
    let params = { 'email': email, 'password': password }
    $.post('login.php', params, function (data) {
        let res = JSON.parse(data)
        if (res.code == 200) {
            window.location = 'index.html'
        } else {
            let error = document.getElementById('error')
            let input_error = document.getElementById('email')
            error.setAttribute('class', 'error_show')
            input_error.setAttribute('class','input-messeger')
            
            
        }
    })
}


function doRegister() {
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    register(email, password)
}

function register(email, password) {
    let params = { 'email': email, 'password': password }
    $.post('sign.php', params, function (data) {
        let res = JSON.parse(data)
        if (res.code == true) {
            window.location = 'login.html';
        } else 
            alert('Register Failed');
        // if (email == 'user@gmail.com' && password == 'user')
        //     window.location = 'Login.html';
        // else
        //     alert("Wrong credentials");
    })
}
