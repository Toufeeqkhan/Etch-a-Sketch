const newGridButton_button = document.getElementById('reset-button')
const container_div = document.getElementById('container')

function newGrid(num = 16){
    container_div.innerHTML = ''
    let opecity = 0.1
    let size = 600 / num
   for(let i = 0;i<(num*num);i++){
    const box_div = document.createElement('div')
    box_div.style.height = `${Math.floor(size)}px`
    box_div.style.width = `${Math.floor(size)}px`
    box_div.classList.add('box')
    container_div.append(box_div)


    box_div.addEventListener('mouseover',()=>{
        box_div.style.backgroundColor = randomColor()
        darkenSquare(box_div)
    })
}
}

newGrid()

newGridButton_button.addEventListener('click',()=>{
    const numOfBoxs = prompt('Enter the nomber of boxes you want per side: ')
    if(numOfBoxs === ''){
        newGrid()
    }else if(numOfBoxs <= 100){
        newGrid(numOfBoxs)
    }else{
        numOfBoxs = prompt('Enter the number under 100!')
    }
})

function randomColor(){
    return  `rgb(${Math.random()* 255},${Math.random()* 255},${Math.random()* 255})`
}

function darkenSquare(square) {
    let opacity = parseFloat(square.style.opacity) || 0.1;
    if (opacity < 1) {
        square.style.opacity = opacity + 0.1;
    }
}