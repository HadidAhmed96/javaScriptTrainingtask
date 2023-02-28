const reverseString = function (str){
    let reverse = '';
    for(let i= str.length -1 , j = 0; i>=0; i--,j++){
        console.log(i)
        reverse += str[i]; 
    }
    return reverse;
}

reverseString('Hadid');