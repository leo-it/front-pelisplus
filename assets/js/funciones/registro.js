import {
    renderizarcarrousel,
    renderizarcarrouselLogIn
} from "./carrousel.js"
import {
    getMovies
} from "../request/requestPeliculas.js"
import {
    dibujar
} from "../index.js"

export function firebase() {


    const URI_DB = "http://localhost:8000/api"
    const loggedOutLinks = document.querySelectorAll(".logged-out");
    const loggedInLinks = document.querySelectorAll(".logged-in");

    const loginCheck = (user) => {

        if (user && user.emailVerified) {
            loggedInLinks.forEach((link) => (link.style.display = "block"));
            loggedOutLinks.forEach((link) => (link.style.display = "none"));

        } else {
            loggedInLinks.forEach((link) => (link.style.display = "none"));
            loggedOutLinks.forEach((link) => (link.style.display = "block"));

        }
    };


    // Registro


    let pass1 = document.getElementById('signup-password1')
    let pass2 = document.getElementById('signup-password2')
    const signUpForm = document.querySelector("#signup-form");
    signUpForm.addEventListener("submit", (e) => { //captura el evento submit
        e.preventDefault(); // desde ese evento cancelo el reinicio del formulario
        if (pass1.value == pass2.value) {
            const email = signUpForm["signup-email"].value;
            const password = signUpForm["signup-password1"].value;
            // Autenttificacion usuario
            auth
                .createUserWithEmailAndPassword(email, password) //crea un usuario basado en mail y contraseña
                .then(function () {
                    verificar()
                })
                .then(function () {
                    Swal.fire({
                        title: "Te registraste correctamente",
                        text: " Ingresa a tu mail y valida tu usuario",
                        icon: "success",
                        position: 'top'
                    })


                })
                .then((userCredential) => { //una vez me devuelva la respuesta la capturo y va a ser la credencial del usuario
                    // limpiar form
                    signUpForm.reset();
                    // cerrar modal
                    $("#signupModal").modal("hide"); //bootstrap usa jquery
                })
                .catch(function (error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    let errorRegistroHtml = document.getElementById('mensaje-error-registro');
                    errorRegistroHtml.innerHTML = `   <p>${errorMessage}</p>  `

                })



        } else {
            let errorPass = document.getElementById("password-registro")
            errorPass.innerHTML = "Contraseñas no coinciden"
        }
    });




    // ingreso
    const signInForm = document.querySelector("#login-form");
    signInForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const email = signInForm["login-email"].value;
        const password = signInForm["login-password"].value;

        // autentificacion usuario para imprimir cards

        auth.signInWithEmailAndPassword(email, password)

            .then((userCredential) => { //
                // clear the form
                signInForm.reset();
                // cerrar el modal
                $("#signinModal").modal("hide");
                document.location.reload()
            })
            .catch(function (error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                //alert(errorCode);
                let errorIngresoHtml = document.getElementById('mensaje-error-ingreso');
                errorIngresoHtml.innerHTML = `   <p>${errorMessage}</p>  `

            })

    });



    /*  // ingreso2
     
    export default function Login() {
        const history = useHistory();
        async function googleLogin() {
          //1 - init Google Auth Provider
          const provider = new firebase.auth.GoogleAuthProvider();
          //2 - create the popup signIn
          await auth.signInWithPopup(provider).then(
            async (result) => {
              //3 - pick the result and store the token
              const token = await auth?.currentUser?.getIdToken(true);
              //4 - check if have token in the current user
              if (token) {
                //5 - put the token at localStorage (We'll use this to make requests)
                localStorage.setItem("@token", token);
                //6 - navigate user to the book list
                history.push("/book-list");
              }
            },
            function (error) {
              console.log(error);
            }
          );
        }
        return (
          <div>
            <button onClick={googleLogin} className="login-button">
              GOOGLE
            </button>
          </div>
        );
      }
      
      // ingreso2 */








    // eventos
    //lista para cambios de estado de autenticación
    auth.onAuthStateChanged((user) => { //desde auth voy a usar un metodo onauth que se dispara 
        if (user && user.emailVerified) { // cada vez que cambia la autenticacion y obtiene el objeto user, si user existe
            console.log("signin");
            console.log("mailVerificacion: " + user.emailVerified);
            renderizarcarrouselLogIn();
            getMovies(URI_DB + "/movie", dibujar)
            loginCheck(user);
            console.log(user);
            console.log(user.email);

        } else if (user) {
            console.log("email no verificado");
            //alert("Mail: "+user.email+" no verificado, ingresa a tu mail para autenticar usuario.");

            console.log("signout");
            renderizarcarrousel();
            loginCheck(user);
            let errorIngresoHtml = document.getElementById('mensaje-error-ingreso');
            errorIngresoHtml.innerHTML = `   <p>Mail: ${user.email} no verificado, dirigite a tu mail para autenticarlo</p>  `
            console.log(user.email);
        } else {
            console.log("signout");
            renderizarcarrousel();
            loginCheck(user);


        }
    });

    // Login with Google
    const googleButton = document.querySelector("#googleLogin");

    googleButton.addEventListener("click", (e) => {
        e.preventDefault();
        signInForm.reset();
        $("#signinModal").modal("hide");

        //const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider).then((result) => {
                console.log(result);
                console.log("google sign in");
            })
            .catch(err => {
                console.log(err);
            })
    });

    auth.onAuthStateChanged(function (user) {
        if (user) {
            let name, email, photoUrl, uid, emailVerified;

            user.providerData.forEach(function (profile) {

                name = user.displayName;
                email = profile.email;
                photoUrl = user.photoURL;
                emailVerified = user.emailVerified;
                uid = user.uid;

                let nameHtml = document.getElementById('perfilEmail');
                nameHtml.innerHTML = `   ${email}  `

                if (name) {
                    let logoutHtml = document.getElementById('perfilPhoto');
                    logoutHtml.innerHTML = `   <img class="fotoPerfil" style=" border-radius: 999px;" src="${photoUrl}" alt="foto perfil"> `
                }

            });

        }
    });

    function verificar() {
        let user = auth.currentUser;

        user.sendEmailVerification().then(function () {
            // Email sent.
            console.log("correo de verificacion enviado");
        }).catch(function (error) {
            // An error happened.
            console.log(error);
        });
    }

    // salida
    const logout = document.querySelector("#logout");
    logout.addEventListener("click", (e) => {
        e.preventDefault();
        auth.signOut()
            .then(function () {
                Swal.fire({
                        title: "Cerraste sesión",
                        text: " Hasta luego",
                        icon: "success",
                        position: 'top'
                    })
                    .then(() => { //si el cierre de la sesion fue correcto quiero que hagas luego
                        console.log("signup out");
                        document.location.reload()
                    })



            })
            .catch(function (error) {
                console.log('Error occurred:', error);
            })
    });



}