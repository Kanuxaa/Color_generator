const btn = document.getElementById('btnNode')
const colors = document.querySelectorAll('.color')

btn.addEventListener('click', ()=>{
    colors.forEach(color =>{
        const red = parseInt(Math.random()*255)
        const green = parseInt(Math.random()*255)
        const blue = parseInt(Math.random()*255)
        color.innerHTML = `rgb(${red}, ${green}, ${blue})`
        color.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    })
})