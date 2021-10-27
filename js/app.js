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

document.addEventListener ("click", () => {
    const countdBtn = document.getElementsByTagName("p");
    console.log(countdBtn);
},
{ once: true }
);


//BAR PROGRESS

let initial = 0;
const barBtn = document.querySelector(".btn-bar");

barBtn.addEventListener( "click", () => {
    if (initial == 0) {
        initial = 1;
        let elem = document.getElementById("myBar");
        let width = 1;
        let id = setInterval(frame, 10);
        function frame() {
          if (width >= 100) {
            clearInterval(id);
            initial = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
      }
     }
  );
