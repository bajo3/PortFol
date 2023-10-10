// translations.js

    function changeLanguage() {
        const currentLanguage = document.getElementById("language").textContent;
        
        if (currentLanguage === "ES") {
        document.getElementById("language").textContent = "EN";
        changeToEnglish();
        } else {
        document.getElementById("language").textContent = "ES";
        // Llama a una función para cambiar a español si es necesario
        }
    }
  
const translations = {
    welcome: "Welcome",
    aboutMe: "About Me",
    portfolio: "Portfolio",
    blog: "Blog",
    contact: "Contact",
    // Agrega más traducciones según sea necesario
  };
  
  // Función para cambiar el idioma a inglés
  function changeToEnglish() {
    document.getElementById("home").textContent = translations.welcome;
    document.getElementById("nav-about").textContent = translations.aboutMe;
    document.getElementById("nav-portfolio").textContent = translations.portfolio;
    document.getElementById("nav-blog").textContent = translations.blog;
    document.getElementById("nav-contact").textContent = translations.contact;
  }
  