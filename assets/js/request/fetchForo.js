export function postForo() {
    const buttom = document.getElementById("botonForo");
    const url = "http://localhost:8000/api/post-coment"
    const alias = document.getElementById("alias-foro")
    const mail = document.getElementById("mail-foro")
    const comentario = document.getElementById("comentario-foro")


    buttom.addEventListener('click', () => {
        const newPost = {
            name: alias.value,
            email: mail.value,
            description: comentario.value
        }

        fetch(url, {
            method: "post",
            body: JSON.stringify(newPost),
            headers: {
                "content-type": "application/json"
            }
        })
    })
}