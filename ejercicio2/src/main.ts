import './style.css'
/*
EJERCICIO 2: Crear una clase Calculadora que contendrá los siguientes métodos:
•	Sumar
•	Restar
•	Multiplicar
•	Dividir
•	Potencia
•	Factorial
*/

class Calculadora {

  num1: number;
  num2: number;
  num3: number;
  num4: number;
  num5: number;

  constructor(num1:number, num2:number, num3:number, num4:number, num5:number){
    this.num1 = num1
    this.num2 = num2
    this.num3 = num3
    this.num4 = num4
    this.num5 = num5
  }
sumar(num1:number, num2:number, num3:number, num4:number, num5:number){
  console.log("Sumatoria: ", (num1 + num2 + num3 + num4 + num5))
}
restar(num1:number, num2:number, num3:number, num4:number, num5:number){
  console.log("Resta: ", (num1 - num2 - num3 - num4 - num5))

}
multiplicar(num1:number, num2:number, num3:number, num4:number, num5:number){
  console.log("Multiplicación: ", (num1 * num2 * num3 * num4 * num5))
}
dividir(num1:number, num2:number){
  console.log("División: ", (num1 / num2))
}
potencia(num1:number){
  console.log("Potencia: ", (Math.pow(num1, 2)))
}
factorial(num1: number){
  console.log("Factorial: ", (Math.sqrt(num1)))
}
}

let operacion = new Calculadora(1,1,1,1,1)
operacion.sumar(1,2,3,4,5)
operacion.restar(5,4,3,2,1)
operacion.multiplicar(1,2,3,4,5)
operacion.dividir(400,20)
operacion.potencia(9)
operacion.factorial(81)