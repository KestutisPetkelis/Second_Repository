const button = document.querySelector("button")
const numb = document.querySelector("h1")

button.onclick = () =>{
    
    let num = randomMaxMin(100,0)
    console.log("click ", num)
    numb.innerText = num
}






function randomMaxMin(max, min){
    return Math.floor(Math.random() * (max - min + 1)) + min
}