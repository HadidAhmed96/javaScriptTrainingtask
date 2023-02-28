const capitalize = function(Str){
    
    let get = Str.charCodeAt(0)- 32;
    get = String.fromCharCode(get) + Str.slice(1);
    // get = get.charCodeAt
    console.log(get)
}

capitalize('hadid');
capitalize('ahmed');
capitalize('haseeb');


