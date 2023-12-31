let display = document.querySelector(".screen")
let components = document.querySelectorAll(".op");
components.forEach(element => {
  element.addEventListener("click", () => {
    display.append(element.innerHTML)
  })
});
function allclear() {
  display.innerHTML = "";
}
function calculate() {
  try{
    display.innerHTML = eval(display.innerHTML)
  }catch(error) {
    display.innerHTML = "Error"
  }
}
function del() {
  let screen = display.innerHTML.split('')
  let result =  screen.pop();
  display.innerHTML = screen.join('')
}