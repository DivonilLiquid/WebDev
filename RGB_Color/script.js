const heading = document.querySelector("span");
const button = document.getElementById("button");
console.log(button);
/* Add event listener to button on click color changes */
button.addEventListener("click",()=>{
    let n1 = Math.floor((Math.random()*255)+1);
    let n2 = Math.floor((Math.random()*255)+1);
    let n3 = Math.floor((Math.random()*255)+1);
    document.body.style.backgroundColor = `rgb(${n1},${n2},${n3})`;
    heading.innerText = `(${n1},${n2},${n3})`;
})
