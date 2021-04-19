const URI_DB = "http://localhost:8000/api/movie_year/"


let year_id;

export function searchYear() {



    let peliHtml = document.getElementById('years');
    peliHtml.innerHTML = "";
    for (let i = 2019; i < 2022; i++) {
        peliHtml.innerHTML +=

            `
            <li><a class="dropdown-item " href="#${i}" id="${i}">${i}</a></li>
        

            `
    }

    for (let i = 2019; i < 2022; i++) {

        const boton1 = document.getElementById(i);
        console.log(boton1);
        boton1.addEventListener("click", async function () {
            document.getElementById("carouselExampleCaptions2").style.display = "none"
            const res = await fetch(`${URI_DB}${i}`)
            const data = await res.json();
            console.log(data.movie)
            let movies = data.movie

            /* card */
            let peliHtml = document.getElementById('peliculas2');
            peliHtml.innerHTML = "";
            for (let peli of movies.reverse()) {
                peliHtml.innerHTML +=
                   
      `
              
      <button type="button " style="border:1px white "  class=" tarj" data-bs-toggle="modal" data-bs-target="#modalPeli${peli._id}" >
      <div class="col  ">
 <div class="card lg-3 tarjeta ">
   <img src="${peli.img}" class="card-img-top" alt="...">
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


        })




    }





}