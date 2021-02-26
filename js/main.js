const btns = document.querySelectorAll('.btn')

for (const btn of btns) {
  btn.addEventListener('click', (e) => {
    e.preventDefault()
    btn.innerText = 'O'
  })
}

//win conditions 

//player move

//robot and/or player 2 moves

//validate results