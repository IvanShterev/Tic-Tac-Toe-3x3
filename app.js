
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

function addEListener(cell){
    cell.addEventListener('click', () => {
        if (flag % 2 == 0){
            cell.textContent = 'X'
            turnText.textContent = "Player O's turn"
        } else{
            cell.textContent = 'O'
            turnText.textContent = "Player X's turn"
        }
        flag++
        cell.style.pointerEvents = 'none'
        
        if(cell.id == 'first'){
            grid[0][0] = cell.textContent
        }
        if(cell.id == 'second'){
            grid[0][1] = cell.textContent
        }
        if(cell.id == 'third'){
            grid[0][2] = cell.textContent
        }
        if(cell.id == 'fourth'){
            grid[1][0] = cell.textContent
        }
        if(cell.id == 'fifth'){
            grid[1][1] = cell.textContent
        }
        if(cell.id == 'sixth'){
            grid[1][2] = cell.textContent
        }
        if(cell.id == 'seventh'){
            grid[2][0] = cell.textContent
        }
        if(cell.id == 'eighth'){
            grid[2][1] = cell.textContent
        }
        if(cell.id == 'ninth'){
            grid[2][2] = cell.textContent
        }
        checkWinner()
    })
}

addEListener(first)
addEListener(second)
addEListener(third)
addEListener(fourth)
addEListener(fifth)
addEListener(sixth)
addEListener(seventh)
addEListener(eighth)
addEListener(ninth)