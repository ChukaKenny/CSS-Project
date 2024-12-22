// Datebox Js (start)

let dateBox = document.querySelector(".datebox");

dateBox.addEventListener ("mouseover",function changeToDate() {
  dateBox.setAttribute("type", "date");
  dateBox.style.textAlign = "center";  
})

dateBox.addEventListener ("mouseout",function changeToText() {
  dateBox.setAttribute("type", "text");
  if (dateBox.value !== "") { dateBox.style.textAlign = "center";}
  else {dateBox.style.textAlign = "";}
})
// Datebox Js (end)

// Character length per Screenwidth Js (start)
let screenWidth = window.innerWidth;
let textAreas = document.querySelectorAll("textarea");

if (screenWidth > 799) {
  textAreas.forEach(function (textArea) {
    textArea.addEventListener("mouseover", function changeMaxLength1() {
      textArea.setAttribute("maxLength", "14");
    });
  });
}

if (screenWidth > 305 && screenWidth < 799) {
  textAreas.forEach(function (textArea) {
    textArea.addEventListener("mouseover", function changeMaxLength2() {
      textArea.setAttribute("maxLength", "11");
    });
  });
} 

if (screenWidth < 305) {
  textAreas.forEach(function (textArea) {
    textArea.addEventListener("mouseover", function changeMaxLength3() {
      textArea.setAttribute("maxLength", "15");
    });
  });
}
// Character length per Screenwidth Js (end)