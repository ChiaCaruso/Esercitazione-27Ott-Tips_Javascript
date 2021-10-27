// DARK MODE

const darkBtn = document.querySelector(".btn-darkmode");
darkBtn.addEventListener( "click", () => {
    document.body.classList.toggle("darkMode");
  }
  );


// LUCE HOBBIES

const hobbyBtn = document.querySelector(".btn-hobbies");
const hobbyDiv = document.querySelector(".hobbies-cont");

hobbyBtn.addEventListener( "click", () => {
    hobbyDiv.className = "hobbies-hover";
    },
    { once: true }
  );


// P COUNT

const countdBtn = document.getElementsByTagName("p");
console.log(countdBtn);
