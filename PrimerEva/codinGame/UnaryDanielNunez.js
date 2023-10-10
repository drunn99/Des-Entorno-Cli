/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

const MESSAGE = readline();

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
console.error(MESSAGE.charCodeAt(0));
console.error(string_to_binary(MESSAGE));
console.log(binary_to_answer(string_to_binary(MESSAGE)));

function binary_to_answer (string){
    let answer = "";
    let looping = false;
    for(let i = 0;i < string.length; i++){
        if(string.charAt(i) == "0" && looping == false){
            answer += "00 ";
            looping = true;
            let index = i;
            while (looping){
                if(string.charAt(index) == "0"){
                    answer += "0";
                    index ++;
                    console.error(answer);
                } else {
                    looping = false;
                    i = index-1;
                }
            }
        } else if (string.charAt(i) == "1" && looping == false){
            answer += "0 ";
            looping = true;
            let index = i;
            while (looping){
                if(string.charAt(index) == "1"){
                    answer += "0";
                    index ++;
                    console.error(answer);
                } else {
                    looping = false;
                    i = index-1;
                }
            }
        }
        answer += i < string.length-1 ? " " : "";
    }
    return answer;
}

function string_to_binary (message){
    let string = "";
    for(let i = 0; i < message.length; i++){
        string += to_binary(message.charCodeAt(i));
    }
    return string;
}

function to_binary(number){
    let binary = "";
    let power = 0;
        for(let i = 6; i >= 0;i--){
            power = Math.pow(2,i);
            if (power <= number){
                number -= power;
                binary += "1";
            } else {
                binary += "0";
            }
        }
    return binary;
}