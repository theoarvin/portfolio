// ----- loader ----- //
const loader = document.querySelector(".loader");

window.addEventListener("load", () => {
  loader.classList.add("fondu-out");
  window.scroll(0, 0);
});

// menu responsive
const menu = document.querySelector('.logo-menu')
const navLinks = document.querySelector('.navBlock')
//const contact = document.querySelector('#contact')
menu.addEventListener('click', () => {
  navLinks.classList.toggle('mobile-menu')
  navLinks.addEventListener('click', () => {
    navLinks.classList.remove('mobile-menu')
  })
})

//  ----- Formulaire ------ //
//import emailJs from "@emailjs/browser";

// récupération du formulaire
const form = document.querySelector(".form");

// RegExp
let emailRegExp = new RegExp(
  "^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$"
);
const mobileRegExp = new RegExp("(0|\\+[0-99]|0033)[1-9][0-9]{8}$");

// récupération des champs erreur
const nameError = document.querySelector(".name-error");
const emailError = document.querySelector(".email-error");
const numberError = document.querySelector(".number-error");
const contentError = document.querySelector(".content-error");
const messageError = document.querySelector(".message-error");

// validation du nom
const validName = () => {
  if (form.name.value.split(" ").join("").length < 2) {
    nameError.innerHTML = "Votre nom est trop court";
    nameError.style.color = "red";
    return false;
  } else if (form.name.value.split(" ").join("").length > 20) {
    nameError.innerHTML = "Votre est nom trop long";
    nameError.style.color = "red";
    return false;
  } else {
    console.log("vous avez plus de 3 caractères");
    nameError.innerHTML = "";
    return true;
  }
};

// validation de l'email
const validEmail = () => {
  if (emailRegExp.test(form.email.value) === true) {
    console.log("email valide");
    emailError.innerHTML = "";
    return true;
  } else {
    console.log("email invalide");
    emailError.innerHTML = "Veuillez rentrer une email valide";
    emailError.style.color = "red";
    return false;
  }
};

// validation du sujet
const validSujet = () => {
  if (form.content.value.split(" ").join("").length < 3) {
    contentError.innerHTML = "Minimum 3 caractères";
    contentError.style.color = "red";
    return false
  } else if (form.content.value.split(" ").join("").length > 15) {
    contentError.innerHTML = "Maximum 15 caractères";
    contentError.style.color = "red";
    return false
  } else {
    contentError.innerHTML = "";
    return true
  }
};

// validation du numéro de téléphone
const validNumber = () => {
  if (form.number.value.split(" ").join("").length > 6 && form.number.value.split(" ").join("").length <= 13) {
    console.log("numero valide");
    numberError.innerHTML = "";
    return true;
  } else {
    console.log("numero invalide");
    numberError.innerHTML = "Veuillez rentrer un numéro valide";
    numberError.style.color = "red";
    return false;
  }
};

const validMessage = () => {
  // Validation du message
  if (form.message.value.split(" ").join("").length < 5) {
    messageError.innerHTML = "Minimum 5 caractères";
    messageError.style.color = "red";
    return false;
  } else if (form.content.value.split(" ").join("").length > 200) {
    messageError.innerHTML = "Maximum 200 caractères";
    messageError.style.color = "red";
    return false;
  } else {
    messageError.innerHTML = "";
    return true;
  }
};

// écoute et validation du formulaire
form.addEventListener("submit", (e) => {
  e.preventDefault();

  validName()  
  validEmail() 
  validSujet() 
  validNumber() 
  validMessage()
  if( validName() && validEmail() && validSujet() && validNumber() && validMessage() ){
    const templateId = "template_vua50xs"
    const serviceId = "service_7ysiqxb"
    const sendFeedback = (serviceId,templateId, {
      name: form.name.value,
      email: form.email.value,
      content: form.content.value,
      number: form.number.value,
      message: form.message.value
    })
  
    emailjs.send(serviceId, templateId, sendFeedback, 'FfQenAJo1oWbrzpBd')
      .then((res) => {
        form.name.value=""
        form.email.value= ""
        form.content.value= ""
        form.number.value= ""
        form.message.value=""
      })
      .catch((err) => console.log(err))
  }
  
});
