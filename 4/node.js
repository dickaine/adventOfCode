


const logFileTextQuestion2 = async file => {
    const response = await fetch(file)
    const text = await response.text()
    const splitText = text.split("\n")
    
    let count = 0;
    
    for(let i = 0; splitText.length > i; i++){
    
        const firstPair = splitText[i].toString().split(",");
        const firstElf = firstPair[0].split("-");
        const secondElf = firstPair[1].split("-");
        
    if((Number(secondElf[0]) >= Number(firstElf[0])) && ((Number(secondElf[0]) <= Number(firstElf[1])))){
         count += 1;
        }
        else if((Number(secondElf[1]) >= Number(firstElf[0])) && (Number(secondElf[1]) <= Number(firstElf[1]))){
        count += 1;
        }
        else if((Number(firstElf[0]) >= Number(secondElf[0])) && (Number(firstElf[0]) <= Number(secondElf[1]))){
        count += 1;
        }else if((Number(firstElf[1]) >= Number(secondElf[0])) && (Number(firstElf[1]) <= Number(secondElf[1]))){
        count += 1;
        }
    } console.log(count);
}
   
const logFileText2 = async file => {
    const response = await fetch(file)
    const text = await response.text()
    const splitText = text.split("\n")
    
    let count = 0;
    
    for(let i = 0; splitText.length > i; i++){
    
        const firstPair = splitText[i].toString().split(",");
        const firstElf = firstPair[0].split("-");
        const secondElf = firstPair[1].split("-");

    if((Number(firstElf[0]) <= Number(secondElf[0])) && (Number(firstElf[1]) >= Number(secondElf[1]))){
        count = count +1;
        } 
        else if((Number(secondElf[0]) <= Number(firstElf[0])) && Number((secondElf[1]) >= Number((firstElf[1])))){
        count += 1
        }
    } console.log(count);
}





// logFileTextQuestion2("input.txt");
logFileText2("input.txt");

