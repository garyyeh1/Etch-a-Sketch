
const grid = document.getElementById("container")

document.getElementById("button").onclick = inputText



function inputText(){
    let x = Number(prompt("enter size"))
    grid.innerHTML = ""

    if (x>=100){
        x = Number(prompt("size too large, reenter value less than 100"))
        setgrid(x)
    }

    else{
        setgrid(x)
    }
}

function setgrid(x){
    for (let i=0; i<x; i++){

        let layers = document.createElement("div")
        layers.setAttribute('class', 'layers')

        grid.appendChild(layers)
        console.log(layers)

        for (let i=0; i<x; i++){

            let numbers = document.createElement("div")
            numbers.setAttribute('class', 'numbers')


            layers.appendChild(numbers)
            numbers.addEventListener('mouseover', function() {numbers.style.background = "grey"})
            
            let sizeW = "calc(960px/" + x + ")" 
            let sizeH = "calc(960px/" + x + ")" 
        
            numbers.style.width = sizeW
            numbers.style.height = sizeH
        }
    

    }

}
