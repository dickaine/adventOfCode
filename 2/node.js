const logFileText = async file => {
    const response = await fetch(file)
    const text = await response.text()
    const splitText = text.split("\n");

    let total = 0;  


    for(let i = 0; i < splitText.length; i++){
        let character = splitText[i]
        let vangst = character.split(" ");
        
        
        let a = vangst[0];
        let b = vangst[1];

        if(a === "A" ){
            if(b === "X"){
                total += 4;
            }
            if(b === "Y"){
                total += 8;
            }
            if(b === "Z"){
                total += 3;
            }
        }
        if(a === "B"){
            if(b === "X"){
                total += 1;
            }
            if(b === "Y"){
                total += 5;
            }
            if(b === "Z"){
                total += 9;
            }
        }
        if(a === "C"){
            if(b === "X"){
                total += 7;
            }
            if(b === "Y"){
                total += 2;
            }
            if(b === "Z"){
                total += 6;
            }
        }       
    }
    console.log(total);
}

const logFileText2 = async file => {
    const response = await fetch(file)
    const text = await response.text()
    const splitText = text.split("\n");

    let total = 0;  


    for(let i = 0; i < splitText.length; i++){
        let character = splitText[i]
        let vangst = character.split(" ");
        
        
        let a = vangst[0];
        let b = vangst[1];

        if(a === "A" ){
            if(b === "X"){
                total += 3;
            }
            if(b === "Y"){
                total += 4;
            }
            if(b === "Z"){
                total += 8;
            }
        }
        if(a === "B"){
            if(b === "X"){
                total += 1;
            }
            if(b === "Y"){
                total += 5;
            }
            if(b === "Z"){
                total += 9;
            }
        }
        if(a === "C"){
            if(b === "X"){
                total += 2;
            }
            if(b === "Y"){
                total += 6;
            }
            if(b === "Z"){
                total += 7;
            }
        }       
    }
    console.log(total);
}

logFileText('input.txt')
logFileText2('input.txt')