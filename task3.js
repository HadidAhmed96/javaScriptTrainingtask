
 const sum = (arr) => {  return arr.reduce(  (index1 ,index2) => index1 + index2);
    }

    const sum2 = function(arr) {
      const get =  arr.reduce(  (index1 ,index2) => {
        console.log('Accumulator', index1, 'Current value', index2);
        return index1 + index2
    });
      return get;        
    }
console.log(sum2([10,20,30])) 
console.log(sum([10,20,30]));