// Its the year 1940, and the British along with the Allied forces, are being brutally assaulted on the battle field, by Hitler's Nazi Germany. The Britishers need to crack the secret communication that takes place between the German troops, with the help of their encryption device "Enigma". Alan Turing, the famous Mathematician, is assigned the task, to break the German encryption code, with his computer device "Christopher".

// The communication happens in the form of strings, and the strings are organized such that, given a string "S", when fed into a text editor "#" means backspace, on a conventional keyboard. Since, everyday, Britain is getting more behind in the war, Alan asks for your help. Help Alan, break the secret communication between German Troops.

// Note that after backspacing an empty text, the text will continue empty.


function take(arr){
    
    let Arr = [];
    for(let i=0; i<arr.length; i++){
        
        if(arr[i]!=="#"){
        Arr.push(arr[i]);
        }else{
            Arr.pop()
        }
    }
            console.log(Arr.join(""));
        
    
}

function runProgram(input) {
    input = input.trim().split("\n");
    
    let T = input[0];
    let line = 1;
    
    for(let t=0; t<T; t++){
        let arr = input[line];
        line++
        take(arr);
    }

}
if (process.env.USER === "") {
    runProgram(``);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
        read += input;
    });
    process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
    });
    process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
    });
}