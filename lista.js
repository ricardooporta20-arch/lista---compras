// lista.js Dayneris Marileth Gonzalez
const Nodo = require('./nodo');

class ListaEnlazada {
    constructor() {
        this.cabeza = null;
    }

    // Añadir producto al final 
    agregar(producto) {
        const nuevoNodo = new Nodo(producto);
        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
        } else {
            let actual = this.cabeza;
            while (actual.siguiente) {
                actual = actual.siguiente;
            }
            actual.siguiente = nuevoNodo;
        }
        console.log(`\n✅ Producto "${producto}" añadido al final.`);
    }

    // Listar productos enumerados - Ricardo Adiel
    mostrar() {
        if (!this.cabeza) {
            console.log("\n⚠️ La lista está vacía.");
            return;
        }
        let actual = this.cabeza;
        let contador = 1;
        console.log("\n🛒 LISTA DE COMPRAS ACTUAL:");
        while (actual) {
            console.log(`${contador}. ${actual.producto}`);
            actual = actual.siguiente;
            contador++;
        }
    }

    // Eliminar el primer elemento - Ricardo Adiel
    eliminarPrimero() {
        if (!this.cabeza) {
            console.log("\n⚠️ No hay productos para eliminar.");
            return;
        }
        const eliminado = this.cabeza.producto;
        this.cabeza = this.cabeza.siguiente;
        console.log(`\n🗑️ Producto "${eliminado}" eliminado (era el primero).`);
    }

    // Buscar producto por nombre 
    buscar(termino) {
        if (!this.cabeza) {
            console.log("\n⚠️ La lista está vacía.");
            return;
        }
        let actual = this.cabeza;
        let posicion = 1;
        let encontrado = false;

        while (actual) {
            if (actual.producto.toLowerCase().includes(termino.toLowerCase())) {
                console.log(`\n🔍 Encontrado: "${actual.producto}" en la posición ${posicion}.`);
                encontrado = true;
            }
            actual = actual.siguiente;
            posicion++;
        }

        if (!encontrado) {
            console.log(`\n❌ No se encontraron coincidencias con "${termino}".`);
        }
    }
}

module.exports = ListaEnlazada;