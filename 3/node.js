const logFileText = async file => {
    const response = await fetch(file)
    const text = await response.text()
    const splitText = text.split("\n")
        
    let priority = 0;
    
    for(let i = 0; i < splitText.length; i++){
        
        const firstRucksack = splitText[i].slice(0, splitText[i].length / 2);
        const secondRucksack = splitText[i].slice(splitText[i].length / 2);
        
        for(let j = 0; j < secondRucksack.length; j++){
            
            if(firstRucksack.includes(secondRucksack[j])){ 
                switch (secondRucksack[j]){
                    case "a":
                        priority = priority + 1;
                        break;
                    case "b":
                        priority = priority + 2;
                        break;
                    case "c":
                        priority = priority + 3;
                        break;
                    case "d":
                        priority = priority + 4;
                        break;
                    case "e":
                        priority = priority + 5;
                        break;
                    case "f":
                        priority = priority + 6;
                        break;   
                    case "g":
                        priority = priority + 7;
                        break;
                    case "h":
                        priority = priority + 8;
                        break;   
                    case "i":
                        priority = priority + 9;
                        break;
                    case "j":    
                    priority = priority + 10;
                         break;
                    case "k":
                        priority = priority + 11; 
                        break;
                    case "l":
                        priority = priority + 12;
                        break;
                    case "m":
                        priority = priority + 13;
                        break;
                    case "n":
                        priority = priority + 14;
                        break;
                    case "o":
                        priority = priority + 15;
                        break;
                    case "p":
                        priority = priority + 16;
                        break;
                    case "q":
                        priority = priority + 17;
                        break;
                    case "r":
                        priority = priority + 18;                            break;
                    case "s":
                        priority = priority + 19;
                        break;
                    case "t":
                        priority = priority + 20;
                        break;
                    case "u":
                        priority = priority + 21;
                        break;
                    case "v":
                        priority = priority + 22;
                        break;
                    case "w":
                        priority = priority + 23;
                        break;
                    case "x":
                        priority = priority + 24;
                        break;
                    case "y":
                        priority = priority + 25;
                        break;
                    case "z":
                        priority = priority + 26;
                        break;
                    case "A":
                        priority = priority + 27;
                        break;
                    case "B":
                        priority = priority + 28
                        break;
                    case "C":
                        priority = priority + 29;
                        break;
                    case "D":
                        priority = priority + 30;
                        break;
                    case "E":
                        priority = priority + 31;
                        break;
                    case "F":
                        priority = priority + 32;
                        break;
                    case "G":
                        priority = priority + 33;
                        break;
                    case "H":
                        priority = priority + 34;
                        break;
                    case "I":
                        priority = priority + 35;
                        break;
                    case "J":
                        priority = priority + 36;
                        break;
                    case "K":
                        priority = priority + 37;
                        break;
                    case "L":
                        priority = priority + 38;
                        break;
                    case "M":
                        priority = priority + 39;
                        break;
                    case "N":
                        priority = priority + 40;
                        break;
                    case "O":
                        priority = priority + 41;
                        break;
                    case "P":
                        priority = priority + 42;
                        break;
                    case "Q":
                        priority = priority + 43;
                        break;
                    case "R":
                        priority = priority + 44;
                        break;
                    case "S":
                        priority = priority + 45;
                        break;
                    case "T":
                        priority = priority + 46;
                        break;
                    case "U":
                        priority = priority + 47;
                        break;
                    case "V":
                        priority = priority + 48;
                        break;
                    case "W":
                        priority = priority + 49;
                        break;
                    case "X":
                        priority = priority + 50;
                        break;
                    case "Y":
                        priority = priority + 51;
                        break;
                    case "Z":
                        priority = priority + 52;
                        break;
                    } break;
                } 
        } 
    }
    console.log("the answer");
    console.log(priority);
}


logFileText('input.txt')
