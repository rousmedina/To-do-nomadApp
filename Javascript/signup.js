const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e)=> {
    e.preventDefault()
    const name = document.querySelector('#name').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUsersRegistered = Users.find(users => users.email === email)
    if(isUsersRegistered){
        return alert('El usuario ya esta registrado!')
    }

    Users.push({name: name, email: email, password:password})
    localStorage.setItem('users',JSON.stringify(Users))
    alert('registro Exitoso')
    window.location.href = 'login.html'
    })
