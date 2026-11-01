// index.js Katherine Aracely Jiron Rodiguez
const readline = require('readline');
const ListaEnlazada = require('./lista');

const miLista = new ListaEnlazada();

// Configuración para leer la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function mostrarMenu() {
    console.log("\n==================================");
    console.log("       LISTA DE COMPRAS CLI       ");
    console.log("==================================");
    console.log("1. Añadir producto al final");
    console.log("2. Listar productos");
    console.log("3. Eliminar primer producto");
    console.log("4. Buscar producto por nombre");
    console.log("5. Salir");
    console.log("==================================");
    
    rl.question("Elige una opción (1-5): ", (opcion) => {
        manejarOpcion(opcion);
    });
}

function manejarOpcion(opcion) {
    switch (opcion) {
        case '1':
            rl.question("Ingresa el nombre del producto: ", (producto) => {
                miLista.agregar(producto);
                mostrarMenu();
            });
            break;
        case '2':
            miLista.mostrar();
            mostrarMenu();
            break;
        case '3':
            miLista.eliminarPrimero();
            mostrarMenu();
            break;
        case '4':
            rl.question("Ingresa el término a buscar: ", (termino) => {
                miLista.buscar(termino);
                mostrarMenu();
            });
            break;
        case '5':
            console.log("¡Saliendo del programa. Éxito con la compra!");
            rl.close();
            break;
        default:
            console.log("Opción no válida. Intenta de nuevo.");
            mostrarMenu();
            break;
    }
}

// Iniciar la aplicación
console.clear(); // Limpia la consola
mostrarMenu();