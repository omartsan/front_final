$("[data-toggle=popover]").popover();

// Crear proyecto de node

// npm init -> agregar la configuración

// npm i sass -> instalar dependencia de sass desde https://www.npmjs.com/package/sass

// crear .gitignore y agregar texto de la pagina -> https://www.toptal.com/developers/gitignore/api/node

// ejecutar comando -> ./node_modules/sass/sass.js --watch ./scss/main.scss output.css


const $forms = document.querySelectorAll(".signup-form") 

//console.log($forms);


function sendEmail(miVariable){

  miVariable.preventDefault()
  const email = miVariable.target.querySelector("input").value
  console.log(email);

}


//const sendEmail = (miVariable) => {

//e.preventDefault()    
//console.log(miVariable);

//}


for(let i = 0; i < forms.length; i ++ ){


  forms[i].addEventListener("submit", sendEmail)

}

