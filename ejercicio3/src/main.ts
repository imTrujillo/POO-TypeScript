import './style.css'
import swal from 'sweetalert2'
/*
EJERCICIO 3. Crea una clase llamada Canción:
Atributos: título, género de la canción y un atributo privado que se llame autor.
Métodos: 
•	Crear un constructor que reciba como parámetros el título y género de la canción.
•	Utiliza los métodos get y set para recibir e imprimir la propiedad autor. 
•	Crea un método para mostrar los datos de la canción. */

class Cancion {
  titulo: string;
  genero: string;
  private autor: string;

  constructor(titulo: string, genero:string){
    this.titulo = titulo;
    this.genero = genero;
    this.autor = "";
  }

  getAutor(){
    return this.autor
  }

  setAutor(autor:string){
    this.autor = autor
  }

  mostrarDatos(){
    const propiedades = {
      Título: this.titulo,
      Género: this.genero,
      Autor: this.getAutor()
    }
    console.log(propiedades)
    swal.fire({
      position: "center", 
      title: `Canción Seleccionada`,
      html: `<p><strong>Título:</strong> ${this.titulo}</p>
            <p><strong>Género:</strong> ${this.genero}</p>
            <p><strong>Autor:</strong> ${this.getAutor()}</p>`,
      showConfirmButton: false,
      timer: 5000 //segundos para la alerta
    });
  }
}

let cancion = new Cancion ("La última noche", "Bolero")
cancion.setAutor("Diego Torres")
cancion.mostrarDatos()


