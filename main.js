let chosenColor = "";

//Handle Pixel Click

let container = document.querySelector(".container")

function handleClick (event){
    console.log(event.target);
    event.target.style.backgroundColor = chosenColor;
};

container.addEventListener("click", handleClick);

//Handle Color Selection

let colors = document.querySelector(".colors")

function handleColorSelection(event){
    chosenColor = event.target.classList[1];
    console.log("event", event.target);
};


colors.addEventListener("click", handleColorSelection);

for (var i = 0; i < 500; i++){
    let pixel = document.createElement("div")
    pixel.className = "pixel"
    container.appendChild(pixel);
}