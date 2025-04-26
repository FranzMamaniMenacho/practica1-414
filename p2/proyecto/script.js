document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario-usuario');
    const listaUsuarios = document.getElementById('lista-usuarios');
    const errorDiv = document.getElementById('error');
    const totalUsuarios = document.getElementById('total-usuarios');
    
    let usuarios = [];

    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const edad = document.getElementById('edad').value;
 
        if (!nombre || !email || !edad) {
            errorDiv.textContent = 'Todos los campos son obligatorios';
            return;
        }
        
        errorDiv.textContent = '';
 
        usuarios.push({nombre, email, edad});

        listaUsuarios.innerHTML = usuarios.map(user => 
            `<li>${user.nombre} - ${user.email} (${user.edad})
             <button onclick="eliminarUsuario(${usuarios.length-1})">Eliminar</button>
            </li>`
        ).join('');

        totalUsuarios.textContent = `Total: ${usuarios.length}`;
 
        formulario.reset();
    });
});

function eliminarUsuario(index) {
    usuarios.splice(index, 1);
    document.getElementById('lista-usuarios').innerHTML = usuarios.map((user, i) => 
        `<li>${user.nombre} - ${user.email} (${user.edad})
         <button onclick="eliminarUsuario(${i})">Eliminar</button>
        </li>`
    ).join('');
    document.getElementById('total-usuarios').textContent = `Total: ${usuarios.length}`;
}