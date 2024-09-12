import './style.css'
import swal from 'sweetalert2'

/*EJERCICIO 1. Crear una clase Cabecera Pagina, que contenga 3 métodos, el primer método que obtenga el título, color y fuente de la página, el segundo método que indique como desea que aparezca el título si centrado, derecha o izquierda y el tercer método que imprima todas las propiedades.*/

class CabeceraPag{
  title: string;
  colorBg: string;
  font: string;

  constructor(){
    this.title = ""
    this.colorBg = ""
    this.font =""
  }

  obtenerInfoHTML(title:string, font: string, colorBg: string){
    this.title = title;
    this.font = font;
    this.colorBg = colorBg;

    const body =  document.querySelector("body");
    const newTitle = document.getElementById("title")

    if(newTitle){
      newTitle.textContent = title
    }
    if(body){
      body.style.backgroundColor = colorBg
      body.style.fontFamily = font
    }
    console.log(`Título: ${title}, Fuente HTML: ${font} Color Fondo HTML: ${colorBg}`)
  }

  titulo(): void{
    const title = document.getElementById("title")
      let btnCentrar =document.getElementById("btnCentrar") 
      let btnIzquierda =document.getElementById("btnIzquierda")
      let btnDerecha =document.getElementById("btnDerecha")      

      if (title){
      btnCentrar?.addEventListener("click", function() {
        title.style.textAlign = "center";
      })
      btnIzquierda?.addEventListener("click", function() {
        title.style.textAlign = "left";
      })
      btnDerecha?.addEventListener("click", function() {
        title.style.textAlign = "right";
      })}
  }
  mostrarPropiedades(): void{
    const propiedades= {
      Título: this.title,
      ColorFondo: this.colorBg,
      Fuente: this.font
    } 
    console.log(propiedades);

    swal.fire({
      position: "center", 
      title: `Propiedades de la página`,
      html: `<p><strong>Título:</strong> ${this.title}</p>
            <p><strong>Color de fondo:</strong> ${this.colorBg}</p>
            <p><strong>Fuente:</strong> ${this.font}</p>`,
      showConfirmButton: false,
      timer: 1500 //segundos para la alerta
    });
  }
}

let objeto= new CabeceraPag()
objeto.obtenerInfoHTML("Ejercicio1","Calibri","darkgreen");
objeto.titulo();

let btnInfo = document.getElementById("Info")
btnInfo?.addEventListener("click",function(){
  objeto.mostrarPropiedades();
})

