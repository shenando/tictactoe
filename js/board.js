const btns = document.querySelectorAll('.btn')
let turn = 0

class Board {
  constructor() {
    //references to boxes in the DOM called 'squares' 
  }
  //mark box method
  //check boxes whether x or o
}

//mark box method
for (const btn of btns) {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    
    turn++
    console.log(turn)

    btn.innerText = turn % 2 === 0 ? 'O' : 'X'
  })
}