// Generate Random Color
const random = (limit)=>{
    return Math.floor(Math.random() * limit)
}
// Generate Ball
const generateBall = ()=>{
    const body = document.querySelector('.screen')
    let bubble = document.createElement('div');
    //Styling
    bubble.style.padding = '10px';
    bubble.style.borderRadius = '50%';
    let radius = random(100)
    bubble.style.width = `${radius}px`
    bubble.style.height = `${radius}px`
    bubble.style.transform = `translate3D(${random(screen.width)}px,${random(screen.height)}px,0px)`
    bubble.style.backgroundColor = `rgba(${random(255)},${random(255)},${random(255)},0.6)`
    // Class for CSS Style
    bubble.classList.add('bubble-item')
    body.appendChild(bubble)
}
const moveBubbles = ()=>{
    const bubbleList = document.querySelectorAll('.bubble-item')
    console.log(bubbleList)
    bubbleList.forEach((b)=>{
        b.style.animation = `glide ${random(30)}s linear infinite`
    })
}
const fillScreen = ()=>{
    for(let i=0;i<=100;i++){
        generateBall()
    }
    moveBubbles()
}

fillScreen()