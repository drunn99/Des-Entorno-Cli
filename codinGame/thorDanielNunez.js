/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/
var inputs = readline().split(' ');
const lightX = parseInt(inputs[0]); // the X position of the light of power
const lightY = parseInt(inputs[1]); // the Y position of the light of power
const initialTx = parseInt(inputs[2]); // Thor's starting X position
const initialTy = parseInt(inputs[3]); // Thor's starting Y position
let updateX = initialTx;
let updateY = initialTy;
// game loop
while (true) {
    const remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    // Write an action using console.log()
    // To debug: console.error('Debug messages...');
        // A single line providing the move to be made: N NE E SE S SW W or NW

        if(updateX < lightX && updateY < lightY){
            console.log('SE')
            updateY++;
            updateX++;
        } else if (updateX < lightX && updateY > lightY){
            console.log('NE');
            updateY--;
            updateX++;
        } else if (updateX > lightX && updateY < lightY){
            console.log('SW');
            updateY++;
            updateX--;
        }  else if (updateX > lightX && updateY > lightY){
            console.log('NW')
            updateY--;
            updateX--;
        }else if (updateX < lightX){
            console.log('E')
            updateX++;
        } else if (updateX > lightX){
            console.log('W');
            updateX--;
        } else if (updateY > lightY){
            console.log('N');
            updateY--;
        } else if (updateY < lightY){
            console.log('S');
            updateY++;
        }  
}