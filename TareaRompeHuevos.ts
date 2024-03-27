interface ItemGeneral {
    nombre: string;
    categoria: string;
    nivel: number;
    costo: number;
}
class Item {
    static id = 0
    item: ItemGeneral
    id_item: number;
    constructor(item: ItemGeneral) {
        this.item = item
        this.id_item = ++Item.id;
    }
}
class Mochila {
    primer_bolsillo: Item[];
    segundo_bolsillo: Item[];
    bolsillito_de_izquierda: Item[];
    constructor() {
        this.primer_bolsillo = [];
        this.segundo_bolsillo = [];
        this.bolsillito_de_izquierda = [];
    }
}
class Personaje {
    nombre: string;
    nivel: number;
    id: number;
    mochila: Mochila;
    static id = 0
    constructor(nombre: string, nivel: number) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.mochila = new Mochila();
        this.id = ++Personaje.id;
    }
    agregar(item: any, bolsillo: string) {
        if (bolsillo === 'primer_bolsillo' && this.mochila.primer_bolsillo.length <= 2) {
            this.mochila.primer_bolsillo.push(item);
        } else if (bolsillo === 'segundo_bolsillo' && this.mochila.segundo_bolsillo.length <= 1) {
            this.mochila.segundo_bolsillo.push(item);
        } else if (bolsillo === 'bolsillito_de_izquierda' && this.mochila.bolsillito_de_izquierda.length <= 0) {
            this.mochila.bolsillito_de_izquierda.push(item);
        } else {
            console.error('ERROR: el espacio del bolsillo esta lleno');
        }
    }
    eliminar_item(id: number, tipo_bolsillo: string) {
        let index: number = -1;
        if (tipo_bolsillo === 'primer_bolsillo') {
            index = this.mochila.primer_bolsillo.findIndex(item => item.id_item === id);
            if (index !== -1) {
                return this.mochila.primer_bolsillo.splice(index, 1);
            } else {
                console.error('ERROR: El item con id: ' + id + ' no está en ' + tipo_bolsillo);
            }
        }
        else if (tipo_bolsillo === 'segundo_bolsillo') {
            index = this.mochila.segundo_bolsillo.findIndex(item => item.id_item === id);
            if (index !== -1) {
                return this.mochila.segundo_bolsillo.splice(index, 1);
            } else {
                console.error('ERROR: El item con id: ' + id + ' no está en ' + tipo_bolsillo);
            }
        }
        else if (tipo_bolsillo === 'bolsillito_de_izquierda') {
            index = this.mochila.bolsillito_de_izquierda.findIndex(item => item.id_item === id);
            if (index !== -1) {
                return this.mochila.bolsillito_de_izquierda.splice(index, 1);
            } else {
                console.error('ERROR: El item con id: ' + id + ' no está en ' + tipo_bolsillo);
            }
        }
        else {
            console.error('ERROR: No existe ningun bolsillo con ese nombre.');
        }
    }
}
const pepe = new Personaje("Pepe", 20);
const nacho = new Personaje("Nacho", 30);
const item1 = new Item({
    nombre: "Espada",
    categoria: "arma",
    nivel: 1,
    costo: 100
})
const item2 = new Item({
    nombre: "Pantalon",
    categoria: "ropa",
    nivel: 1,
    costo: 200
})
const item3 = new Item({
    nombre: "Cuerda",
    categoria: "consumible",
    nivel: 1,
    costo: 300
})
const item4 = new Item({
    nombre: "Adorno",
    categoria: "adorno",
    nivel: 1,
    costo: 400
})
pepe.agregar(item1, 'primer_bolsillo');
pepe.agregar(item2, 'primer_bolsillo');
pepe.agregar(item3, 'primer_bolsillo');
pepe.agregar(item4, 'segundo_bolsillo');

console.log(pepe, pepe.mochila.primer_bolsillo);

pepe.eliminar_item(2, 'primer_bolsillo');
console.log(pepe, pepe.mochila, pepe.mochila.primer_bolsillo);