export function getForo(url) {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let comentarios = JSON.parse(this.responseText).coment;
            let foroHtml = document.getElementById('coments');
            foroHtml.innerHTML = "";
            for (let comentario of comentarios.reverse()) {
                foroHtml.innerHTML +=
                    `
                   <h5 class="card-title text-dark">${comentario.name}</h5>
                   <p class="card-text text-secondary"> ${comentario.description}</p>
                   <div class="border-bottom"></div>                 
               `
            }
            console.log("funcion api foro funcionando");
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}
//foro("http://localhost:8000/api/coment");