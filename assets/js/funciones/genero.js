document.getElementById("accion").addEventListener("click", e =>{
    document.getElementById("carouselExampleCaptions2").style.display="none"
  })
  document.getElementById("infantil").addEventListener("click", e =>{
    document.getElementById("carouselExampleCaptions2").style.display="none"
  })
  document.getElementById("drama").addEventListener("click", e =>{
    document.getElementById("carouselExampleCaptions2").style.display="none"
  })
 export function genero() {
     function action(genero, selector) {
         let gender = document.getElementById("accion");
         gender.addEventListener("click", (e) => {
             //if (e.target.matches(genero.id)) {
             console.log(e.target.id);
             document.querySelectorAll(selector).forEach(el =>
                 el.textContent.toLowerCase().includes(e.target.id) ?
                 el.classList.remove("filter") :
                 el.classList.add("filter")

             );
             // }
         })
     }
     //en el card-filter que es el imput va a buscar el contenido de todos los que tengan clase card1
     action("#accion", ".tarj");

     function infantil(genero, selector) {
         let infant = document.getElementById("infantil");
         infant.addEventListener("click", (e) => {
             //if (e.target.matches(genero.id)) {
             console.log(e.target.id);
             document.querySelectorAll(selector).forEach(el =>
                 el.textContent.toLowerCase().includes(e.target.id) ?
                 el.classList.remove("filter") :
                 el.classList.add("filter")

             );
             // }
         })
     }
     //en el card-filter que es el imput va a buscar el contenido de todos los que tengan clase card1
     infantil("#infantiles", ".tarj");

     function drama(genero, selector) {
         let dramatic = document.getElementById("drama");
         dramatic.addEventListener("click", (e) => {
             //if (e.target.matches(genero.id)) {
             console.log(e.target.id);
             document.querySelectorAll(selector).forEach(el =>
                 el.textContent.toLowerCase().includes(e.target.id) ?
                 el.classList.remove("filter") :
                 el.classList.add("filter")

             );
             // }
         })
     }
     //en el card-filter que es el imput va a buscar el contenido de todos los que tengan clase card1
     drama("#drama", ".tarj");
 }