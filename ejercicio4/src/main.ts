import './style.css'

/*
EJERCICIO 4. Crea una clase llamada Cuenta y va contener lo siguiente:
Atributos: nombre, cantidad, tipo de cuenta y número de cuenta.
Métodos: 
•	Crear un constructor que reciba como parámetros el nombre, cantidad, tipo de cuenta y número de cuenta.
•	Crea un método llamado depositar y en base a la cantidad ingresada en el constructor haz una condición de que si la cantidad es menor a $5.00 que se imprima un mensaje que el valor a depositar debe ser mayor a $5.00 y sino solo imprima un mensaje de que se ha depositado correctamente y la cantidad depositada.
•	Crea un método llamado retirar, que reciba un parámetro llamado valor y en base a eso tienes que restar la cantidad menos el valor ingresado e imprimir un mensaje de lo que ha retirado y cuanto le queda en su cuenta.
Nota: Para el método retirar debes de validar que lo que se retire sea mayor de $5.00 ya que si no hay efectivo debes de tirar un mensaje que no hay nada en la cuenta.
•	Crea un método para mostrar los datos de su nombre, tipo de cuenta y número de cuenta. 
•	Define un objeto de la clase Cuenta y llama sus métodos. */
class Cuenta{
    nombre: string;
    cantidad: number;
    tipoCuenta: string;
    nCuenta: number;
    
    constructor(nombre: string, cantidad: number, tipoCuenta: string, nCuenta:number){
        this.nombre= nombre;
        this.cantidad= cantidad;
        this. tipoCuenta = tipoCuenta;
        this.nCuenta = nCuenta;
    }

    depositar(valor: number){
        this.cantidad = this.cantidad + valor;
        valor < 5 ? console.log("Debes depositar más de $5") : console.log(`SALDO TOTAL: ${this.cantidad}, DEPOSITO: ${valor}`)
    }
    retirar(valor: number){
        const total = this.cantidad - valor
        if (valor>=5 && total>=0){
        console.log(`SALDO CUENTA: ${total}, SALDO RETIRADO: ${valor}`)}
        if (total<0) console.log("No tienes saldo suficiente para el retiro")
        if (valor<5) console.log("Necesitas retirar al menos $5")

    }
    mostrarInfo(){
        const propiedades = {
            Nombre: this.nombre,
            TipodeCuenta: this.tipoCuenta,
            NúmeroDeCuenta: this.nCuenta
        }
        console.log(propiedades)
    }

}

let cuenta = new Cuenta("Christian Armando Vásquez",10,"Corriente",2024011057);
cuenta.depositar(5)
cuenta.retirar(5)
cuenta.mostrarInfo()
