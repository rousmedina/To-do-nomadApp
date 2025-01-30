// Obtener usuario del localStorage
const user = JSON.parse(localStorage.getItem('login_success')) || false;

// Si no hay usuario, redirigir a login.html
if (!user) {
    window.location.href = 'login.html';
} else {
    // Mostrar el nombre del usuario en el span
    document.addEventListener('DOMContentLoaded', () => {
        const userNameSpan = document.getElementById('user-name');
        userNameSpan.textContent = user.name || 'Usuario'; // Si no hay nombre, muestra "Usuario"
    });
}

// Función para cerrar sesión
document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('login_success'); // Eliminar usuario del localStorage
    window.location.href = 'login.html'; // Redirigir al login
});

const lista = document.querySelector('#lista')
const input = document.querySelector('#input')
const botonEnter = document.querySelector('#enter')
const check = 'fa-check-circle'
const uncheck = 'fa-circle'
const lineThrough = 'line-through'
let id 
let LIST 




//funtion agregar tarea 
function agregarTarea( tarea,id,realizado,eliminado){
    if(eliminado){return}

    const REALIZADO = realizado? check:uncheck
    const LINE = realizado ?lineThrough:''

    const elemento = `
                        <li id="elemento">
                        <i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
                        <p class="text ${LINE}"> ${tarea}</p>
                        <i class="fas fa-trash de" data="eliminado" id="${id}"></i>
                        </li>    
                    `  
    lista.insertAdjacentHTML("beforeend",elemento)
}
// TAREA REALIZADA
function tareaRealizada(element) {
    element.classList.toggle(check)
    element.classList.toggle(uncheck)
    element.parentNode.querySelector('.text').classList.toggle(lineThrough)
    LIST[element.id].realizado = LIST[element.id].realizado ?false :true 
}

// tarea eliminada
function tareaEliminada(element){
    element.parentNode.parentNode.removeChild(element.parentNode)
    LIST[element.id].eliminado = true
    alert("Estas seguro de eliminar" ) 
    
}

botonEnter.addEventListener('click', ()=> {
    const tarea = input.value
    if(tarea){
        agregarTarea(tarea,id,false,false)
        LIST.push({
            nombre : tarea,
            id : id,
            realizado : false,
            eliminado : false
        })
        localStorage.setItem('TODO',JSON.stringify(LIST))
    }

    else {
    
    alert("Debe agregar una tarea" ) // agregue mensaje al dar click con caja vacia
    }
    input.value=''
    id++
    })

document.addEventListener('keyup',function(event){
    if(event.key=='Enter')
        {
        const tarea=input.value
        if(tarea){
            agregarTarea(tarea,id,false,false)
            LIST.push({
                nombre : tarea,
                id : id,
                realizado : false,
                eliminado : false
            })
            localStorage.setItem('TODO',JSON.stringify(LIST))

        } else{
            
            alert("Debe agregar una tarea" ) // agregue mensaje al dar enter con caja vacia
        }  
    input.value=''
    id++       
        }
    
})

lista.addEventListener('click',function(event){
    const element = event.target 
    const elementData = element.attributes.data.value
    if(elementData ==='realizado') {
        tareaRealizada(element)
    }
    else if(elementData ==='eliminado') {
        tareaEliminada(element)
    }
    localStorage.setItem('TODO',JSON.stringify(LIST))
})

let data = localStorage.getItem('TODO')
if(data){
    LIST = JSON.parse(data)
    console.log(LIST)
    id = LIST.length
    cargarLista(LIST)
}else {
    LIST = []
    id = 0
}


function cargarLista(array) {
    array.forEach(function(item){
        agregarTarea(item.nombre,item.id,item.realizado,item.eliminado)
    })
}