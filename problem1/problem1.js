console.log(performance.now());

function arrayReplace(inputArray, elementToReplace, subtractionElem){
    inputArray.forEach((element,index)=>{
        if(elementToReplace == element){
            inputArray[index] = subtractionElem;
        };
    })
    console.log(inputArray);
}

arrayReplace([500, 23, 50],500,3)
console.log(performance.now());
// solved