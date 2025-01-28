const user = JSON.parse(localStorage.getItem('login_success')) || false
if (!user){
    window.location.href = 'login.html'

}

const lista = document.querySelector('#lista')
const input = document.querySelector('#input')
const botonEnter = document.querySelector('#enter')


//funtion agregar tarea 
function agregarTarea (tarea){
    const elemento = `
                        <li id="elemento">
                        <i class="far fa-circle co" data="realizado" id="0"></i>
                        <p class="text"> ${tarea}</p>
                        <i class="fas fa-trash de" data="eliminado" id="0"></i>
                        </li>    
                    `  
    lista.insertAdjacentHTML("beforeend",elemento)
}

botonEnter.addEventListener('click', ()=> {
    const tarea = input.value
    if(tarea){
        agregarTarea(tarea)
    }
    else {
    
    alert("Debe agregar una tarea" ) // agregue mensaje al dar click con caja vacia
    }
    input.value=''
    })

document.addEventListener('keyup',function(event){
    if(event.key=='Enter')
        {
        const tarea=input.value
        if(tarea){
            agregarTarea(tarea)

        } else{
            
            alert("Debe agregar una tarea" ) // agregue mensaje al dar enter con caja vacia
        }  
         input.value='';         
        }

    // funcion logout o cerrar sesion
    document.getElementById('logout').addEventListener('click', function() {
        window.open("http://127.0.0.1:5500/login.html");
    });
    
})