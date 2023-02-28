    
    function reverse(str) {
		const rev =  [...str].reduce((index1, index2) => {
            console.log(index1 , "  ", index2)
            return index2.concat(index1)});
        return rev === str ? true : false;
	}
	
	console.log(reverse("hah"))
    console.log(reverse("did"))
    console.log(reverse("hadid"))

