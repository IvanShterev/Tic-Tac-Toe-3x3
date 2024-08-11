
const first = document.getElementById('first')
const second = document.getElementById('second')
const third = document.getElementById('third')
const fourth = document.getElementById('fourth')
const fifth = document.getElementById('fifth')
const sixth = document.getElementById('sixth')
const seventh = document.getElementById('seventh')
const eighth = document.getElementById('eighth')
const ninth = document.getElementById('ninth')
const turnText = document.getElementById('turn')
const bottomContainer = document.querySelector('.bottom-container')
const cellGhostList = document.querySelectorAll('.cell-ghost') 
let flag = 0
let grid = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

function checkWinner(){
    let ifWinner = false
    let winner = ''
    //horizontal top
    if(grid[0][0] == grid[0][1] && grid[0][0] == grid[0][2] && grid[0][0] != ''){
        winner = grid[0][0]
        ifWinner = true
        first.classList.add('horizontal-top')
        second.classList.add('horizontal-top')
        third.classList.add('horizontal-top')
    }
    //vertical left
    else if(grid[0][0] == grid[1][0] && grid[0][0] == grid[2][0] && grid[0][0] != ''){
        winner = grid[0][0]
        ifWinner = true
        first.classList.add('vertical-left')
        fourth.classList.add('vertical-left')
        seventh.classList.add('vertical-left')
    }
    //diagonal left
    else if(grid[0][0] == grid[1][1] && grid[0][0] == grid[2][2] && grid[0][0] != ''){
        winner = grid[0][0]
        ifWinner = true
        first.classList.add('diagonal-left')
        fifth.classList.add('diagonal-left')
        ninth.classList.add('diagonal-left')
    }
    //vertical middle
    else if(grid[0][1] == grid[1][1] && grid[0][1] == grid[2][1] && grid[0][1] != ''){
        winner = grid[0][1]
        ifWinner = true
        second.classList.add('vertical-middle')
        fifth.classList.add('vertical-middle')
        eighth.classList.add('vertical-middle')
    }
    //vertical right
    else if(grid[0][2] == grid[1][2] && grid[0][2] == grid[2][2] && grid[0][2] != ''){
        winner = grid[0][2]
        ifWinner = true
        third.classList.add('vertical-right')
        sixth.classList.add('vertical-right')
        ninth.classList.add('vertical-right') 
    }
    //diagonal right
    else if(grid[0][2] == grid[1][1] && grid[0][2] == grid[2][0] && grid[0][2] != ''){
        winner = grid[0][2]
        ifWinner = true
        third.classList.add('diagonal-right')
        fifth.classList.add('diagonal-right')
        seventh.classList.add('diagonal-right')
    }
    //horizontal middle
    else if(grid[1][0] == grid[1][1] && grid[1][0] == grid[1][2] && grid[1][0] != ''){
        winner = grid[1][0]
        ifWinner = true
        fourth.classList.add('horizontal-middle')
        fifth.classList.add('horizontal-middle')
        sixth.classList.add('horizontal-middle')
    }
    //horizontal bottom
    else if(grid[2][0] == grid[2][1] && grid[2][0] == grid[2][2] && grid[2][0] != ''){
        winner = grid[2][0]
        ifWinner = true
        seventh.classList.add('horizontal-bottom')
        eighth.classList.add('horizontal-bottom')
        ninth.classList.add('horizontal-bottom')
    }
    if(grid[0][0] != '' && grid[0][1] != '' && grid[0][2] != '' && grid[1][0] != '' && grid[1][1] != '' &&
    grid[1][2] != '' && grid[2][0] != '' && grid[2][1] != '' && grid[2][2] != '' && ifWinner == false){
        const restartBtn = document.createElement('button')
        restartBtn.textContent = 'Restart'
        restartBtn.id = 'restart'
        restartBtn.addEventListener('click', () => {
            location.reload()
        })
        bottomContainer.appendChild(restartBtn)
        turnText.textContent = "It's a draw!"
        let flag = 0
        let grid = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
    }

    if(ifWinner){
        first.style.pointerEvents = 'none'
        second.style.pointerEvents = 'none'
        third.style.pointerEvents = 'none'
        fourth.style.pointerEvents = 'none'
        fifth.style.pointerEvents = 'none'
        sixth.style.pointerEvents = 'none'
        seventh.style.pointerEvents = 'none'
        eighth.style.pointerEvents = 'none'
        ninth.style.pointerEvents = 'none'
        turnText.textContent = `Player ${winner} wins!`
        const restartBtn = document.createElement('button')
        restartBtn.textContent = 'Restart'
        restartBtn.id = 'restart'
        restartBtn.addEventListener('click', () => {
            location.reload()
        })
        bottomContainer.appendChild(restartBtn)
        let flag = 0
        let grid = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ]
    }
}

function addEListener(cellGhost){
    cellGhost.addEventListener('click', () => {
        if (flag % 2 == 0){
            cellGhost.classList.add('x-class')
            cellGhost.textContent = 'X'
            turnText.textContent = "Player O's turn"
        } else{
            cellGhost.classList.add('o-class')
            cellGhost.textContent = 'O'
            turnText.textContent = "Player X's turn"
        }
        flag++
        cellGhost.style.pointerEvents = 'none'
        
        if(cellGhost.id == 'g-first'){
            grid[0][0] = cellGhost.textContent
        }
        if(cellGhost.id == 'g-second'){
            grid[0][1] = cellGhost.textContent
        }
        if(cellGhost.id == 'g-third'){
            grid[0][2] = cellGhost.textContent
        }
        if(cellGhost.id == 'g-fourth'){
            grid[1][0] = cellGhost.textContent
        }
        if(cellGhost.id == 'g-fifth'){
            grid[1][1] = cellGhost.textContent
        }
        if(cellGhost.id == 'g-sixth'){
            grid[1][2] = cellGhost.textContent
        }
        if(cellGhost.id == 'g-seventh'){
            grid[2][0] = cellGhost.textContent
        }
        if(cellGhost.id == 'g-eighth'){
            grid[2][1] = cellGhost.textContent
        }
        if(cellGhost.id == 'g-ninth'){
            grid[2][2] = cellGhost.textContent
        }
        checkWinner()
    })
}

cellGhostList.forEach(cellGhost => addEListener(cellGhost))