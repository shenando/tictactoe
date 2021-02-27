const btns = document.querySelectorAll('.btn')
let turn = 0

for (const btn of btns) {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    
    turn++
    console.log(turn)

    btn.innerText = turn % 2 === 0 ? 'O' : 'X'
  })
}

//win conditions 

//player move

//robot and/or player 2 moves

//validate results