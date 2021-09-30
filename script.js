let bod = document.querySelector('body');
let container = document.createElement('div');
container.setAttribute('id', 'container');
let reset = document.createElement('button');
reset.innerText= "clear"
reset.addEventListener('click', clear)

var setup = prompt("Please enter your desired squares per side")

bod.appendChild(reset);
bod.appendChild(container);

for (let index = 0; index < setup; index++) {
    for (let i = 0; i < setup; i++) {
    const element = document.createElement('div');
    element.setAttribute('id', ('div'+index))
    element.classList.add('divi')
    element.style.gridRow = index;
    ratio = (960/setup + "px")
    containergrid = "repeat(" + setup + ")"
    element.style.width = ratio;
    element.style.height = ratio;
    container.style.gridTemplateRows = containergrid;
    container.style.gridTemplateColumns = containergrid;
    container.appendChild(element)
    }
}



let effects = container.querySelectorAll('.divi');


for (const effect of effects) {
    effect.addEventListener('mouseover', function(event) {
      effect.classList.add('touched')
    })
  }

function clear(event){
    let beentouched = container.querySelectorAll('.touched');
    for(const touch of beentouched){
        touch.classList.remove('touched')
    }
}

if (setup>100){
    alert("Number of squares per side is 100 maximum")
}
