let usuarios = [];

document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('formulario-usuario');
    const buscador = document.getElementById('buscador');
    
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const edad = document.getElementById('edad').value.trim();
        
        if (!nombre || !email || !edad) {
            document.getElementById('error').textContent = 'Todos los campos son obligatorios';
            return;
        }
        
        document.getElementById('error').textContent = '';
        usuarios.push({nombre, email, edad});
        actualizarLista(usuarios);
        formulario.reset();
    });
    
    buscador.addEventListener('input', function(e) {
        const texto = e.target.value.toLowerCase();
        const filtrados = usuarios.filter(user => 
            user.nombre.toLowerCase().includes(texto)
        );
        actualizarLista(filtrados);
    });
});

function actualizarLista(usuariosMostrar) {
    const lista = document.getElementById('lista-usuarios');
    lista.innerHTML = usuariosMostrar.map((user, index) => `
        <li>
            ${user.nombre} - ${user.email} (${user.edad})
            <button onclick="eliminarUsuario(${index})">Eliminar</button>
        </li>
    `).join('');
    
    document.getElementById('total-usuarios').textContent = `Total: ${usuarios.length}`;
}

function eliminarUsuario(index) {
    usuarios.splice(index, 1);
    actualizarLista(usuarios);
}