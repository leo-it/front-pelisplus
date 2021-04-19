import {
  getMovies
} from "./request/requestPeliculas.js"
import {
  firebase
} from "./funciones/registro.js"
import {
  searchFilters
} from "./funciones/busqueda.js"
import {
  genero
} from "./funciones/genero.js"
import {searchYear} from './funciones/searchYear.js'
export const URI_DB = "http://localhost:8000/api"
searchYear()
//firebase
firebase();

//buscador
searchFilters(".card-filter", ".tarj");
genero()



export function dibujar(pelis) {
  let peliculaHtml = document.getElementById('peliculas2');

  peliculaHtml.innerHTML = "";
  for(let i=0; i<2; i++){
  for (let peli of pelis) {
    peliculaHtml.innerHTML +=

      `
              
                    <button type="button  " style="border:1px white "  class=" tarj" data-bs-toggle="modal" data-bs-target="#modalPeli${peli._id}" >
                    <div class="col  ">
               <div class="card lg-3 tarjeta ">
                 <img  src="${peli.img}" class="card-img-top img-fluid" alt="...">
                 <div class="card-body">
                   <p class="text-dark" style="font-size: 15px">${peli.title}</p>
                   <p  class="card-text"style="display: none" id="genero">Genero: ${peli.gender} </p>
               </div> 
           </div>
           </div>

           </button>
                    <!-- Modal -->
                    <div class="modal fade" id="modalPeli${peli._id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">${peli.title}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body ratio ratio-16x9" id="">
              
                              <iframe width="560" height="315" src="${peli.url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>              
         
                              </div>
                          <div class="modal-footer">
                          <p  class="card-text  col-lg-12" id="genero">Genero: ${peli.gender} </p>
                   <p class="card-text col-lg-12">Descripcion: ${peli.description}</p>    
                        <!--  <button type="button" class="btn btn-primary"><i class="fas fa-thumbs-up"></i></button> -->
                          </div>
                        </div>
                      </div>
                    </div>
               
               `

  }
}
}