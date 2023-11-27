const logFileText = async file => {
    const response = await fetch(file)
    const text = await response.text()
    const splitText = text.split("\n");

    let total = 0;
    let elfArray = [];

    for(let i = 0; i < splitText.length; i++){
        let number = splitText[i]
        total += Number(number);

        if(number === ""){
            
            elfArray.push(total)
            total = 0;
            
        }   
   }
   let top3 = elfArray.sort().slice(-3);
   let sumTop3 = top3[0] + top3[1] + top3[2];
   console.log(sumTop3);
}

// logFileText('input.txt')