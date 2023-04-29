const gamerImg = document.querySelector(".gamerImg");

const compImg = document.querySelector(".compImg");

const gamerScor = document.querySelector(".gamerScor");
const compScor = document.querySelector(".compScor");

let arr = ["das", "kagiz", "qayci"];

function comprandom() {
  return arr[Math.floor(Math.random() * 3)];
}

function gamerImglink(a) {
  const imgSrc = ["img/das.png", "img/kagiz.png", "img/qaayci.png"];
  return imgSrc[arr.indexOf(a)];
}

function alinan(q, w) {
  gamerImg.src = gamerImglink(q);
  compImg.src = gamerImglink(w);
  if (gamerScor.innerHTML >= "4") {
    alert("QAZANDINIZ :))");
    gamerScor.innerHTML = "0";
    compScor.innerHTML = "0";
    
  } else if (compScor.innerHTML >= "4") {
    alert("!!!!!UDUZDUN :(!!!!!!");
    gamerScor.innerHTML = "0";
    compScor.innerHTML = "0";
    
  } else {
    if (q === w) {
      return;
    }
    if (
      (q === "kagiz" && w === "das") ||
      (q === "qayci" && w === "kagiz") ||
      (q === "das" && w === "qaci")
    ) {
      gamerScor.innerHTML++;
    } else {
      compScor.innerHTML++;
    }
  }
}

document.addEventListener("keydown", (e) => {
  switch (e.key.toLocaleLowerCase()) {
    case "a":
      alinan("das", comprandom());
      break;
    case "s":
      alinan("qayci", comprandom());
      break;
    case "d":
      alinan("kagiz", comprandom());
      break;
    default:
      alert("duzgun buymeni basin");
      break;
  }
});
