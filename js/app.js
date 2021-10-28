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

//IMG FADE IN/FADE OUT

const btnImg = document.querySelector(".btn-img");
const showImg = document.querySelector(".cont-img");

btnImg.addEventListener("click", () => {
  showImg.classList.toggle("show-img");
}
);


// COLOR CIRCLE

const color1 = "#2183ad";
const color2 = "#a966e3";
const color3 = "#7ddbb2";
const color4 = "#e33232";
const color5 = "#916717";

const colorCircle = [];

colorCircle.push(color1, color2, color3, color4, color5);

const circle = document.querySelector(".circle");
const btnCircle =document.querySelector(".btn-circle");

let index = 0;

const colorChange = ( () => {
  circle.style.background = colorCircle[index];
  index = (index + 1) % colorCircle.length;
})

setInterval( colorChange, 5000);