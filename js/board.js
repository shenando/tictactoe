const btns = document.querySelectorAll('.btn')

class Board {
  constructor() {
    let playerScore, opponentScore = []
  }
  markBox() {
    let turn = 0

    for (const btn of btns) {
      btn.addEventListener('click', (e) => {
        e.preventDefault()
        
        turn++
        console.log(turn)
    
        btn.innerText = turn % 2 === 0 ? 'O' : 'X'
      })
    }
  }

  checkBox() {
    
  }
  //check boxes whether x or o
}

