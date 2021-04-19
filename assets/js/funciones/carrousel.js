import { searchFilters } from "./busqueda.js"


/* searchFilters(".card-filter", ".tarj");
 */

document.getElementById("inputSearch").addEventListener("keyup", e =>{
  document.getElementById("carouselExampleCaptions2").style.display="none"
})

export function renderizarcarrousel() {
    let pelisRend = document.querySelector(".carru")

    let htmlPeli2 = `  <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                  <ol class="carousel-indicators">
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                    <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                  </ol>
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src="https://pelisplus.live/wp-content/themes/pelisplus/images/fb-capture.png" class="d-block w-100 " alt="...">
                      <div class="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
                       <button class="btn btn-primary" data-bs-target="#signinModal" data-bs-toggle="modal">Ingresa</button>
                      
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src="https://alacontra.es/wp-content/uploads/2018/12/Mejores-pel%C3%ADculas.jpg" class="d-block w-100" alt="...">
                      <div class="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
                       <!-- <button class="btn btn-primary " data-bs-target="#signinModal" data-bs-toggle="modal">Ingresa</button>-->
                      </div>
                    </div>
                    <div class="carousel-item">
                      <img src="https://i.blogs.es/d0423d/espinof-las-peores-peliculas-de-2017-montaje-jlcaviaro/1366_2000.jpg" class="d-block w-100" alt="...">
                      <div class="carousel-caption d-none d-md-block">
                        <h5></h5>
                        <p></p>
                        <!-- <button class="btn btn-primary" data-bs-target="#signinModal" data-bs-toggle="modal">Ingresa</button>
                        -->
                      </div>
                    </div>
                  </div>
                 
                </div>`;
    pelisRend.innerHTML = htmlPeli2;


};

export function renderizarcarrouselLogIn() {
  let pelisRend = document.querySelector(".carrouselIn")

  let htmlPeli2 = `  <div id="carouselExampleCaptions2" class="carousel slide " data-bs-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"></li>
                  <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"></li>
                  <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="https://i.ytimg.com/vi/bAp5iVBwm_E/maxresdefault.jpg" class="d-block w-100 " alt="...">
                    <div class="carousel-caption d-none d-md-block">
                      <h5></h5>
                      <p></p>
                    
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src="https://alacontra.es/wp-content/uploads/2018/12/Mejores-pel%C3%ADculas.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                      <h5></h5>
                      <p></p>
                     <!-- <button class="btn btn-primary " data-bs-target="#signinModal" data-bs-toggle="modal">Ingresa</button>-->
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src="https://i.blogs.es/d0423d/espinof-las-peores-peliculas-de-2017-montaje-jlcaviaro/1366_2000.jpg" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                      <h5></h5>
                      <p></p>
                    </div>
                  </div>
                </div>
                
              </div>`;
  pelisRend.innerHTML = htmlPeli2;


};
