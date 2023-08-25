// variables
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let width = 0
let speed = 0

function menu() {
    console.log("[[__silly things menu__]]\n")
    readline.question('1. Random grid output\n\n2. Sorting array\n\n3. Not made yet\n\nOption(no.): ', Usrinput => {
        if(Usrinput == 1) {
            console.clear()
            initRandomGrid()
        } else if(Usrinput == 2) {
            console.clear()
            initSortingArray()
        } else if(Usrinput == 3) {
            console.log("In progress")
            console.clear()
            menu()
        } else {
            console.log("Invalid input")
            console.clear()
            menu()
        }
        
    });
}



// ask for terminal user input
function initRandomGrid() {
    readline.question('Width: ', Usrwidth => {
        readline.question('Speed(ms): ', Usrspeed => {
            readline.close();
            width = Usrwidth
            speed = Usrspeed
            randomArrayGeneration()
        });
    });
}

// generation function
function randomArrayGeneration() {
    let grid = []
    for(let i = 0; i < width; i++) {
        // assign 20% chance of being a wall
        if(Math.random() < 0.2) {
            grid.push(" ")
        } else {
            grid.push("☐")
        }

    }
    console.log(grid.join(" "));
    // invoke generation function again after speed timer
    setTimeout(randomArrayGeneration, speed); 
}

// !! WORKING ON !!
function initSortingArray() {
    let lowNum = 0
    let highNum = 0
    let RandSortArray = []
    readline.question('lowest number: ', usrLowNum => {
        readline.question('highest number: ', usrHighNum => {
            lowNum = usrLowNum
            highNum = usrHighNum
            for(let i = lowNum; i < highNum; i++) {
                ranNum = Math.floor(Math.random() * highNum)
                RandSortArray.push(ranNum)
            }
            
            readline.close();
            console.log(RandSortArray)
        }); 
    });

    

    
}

menu()