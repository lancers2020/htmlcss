function getterDuplicate(data){
    let duplicates = [];
    for(var i = 0; i < data.length; i++){
        if(data[i] == data[i+1]){
            if(!duplicates.includes(data[i])){
                duplicates.push(data[i]);
            }
        }
    }
    return duplicates;
}
function getterTriplicate(data){
    let duplicates = [];
    for(var i = 0; i < data.length; i++){
        if(data[i] == data[i+1] && data[i] == data[i+2]){
            if(!duplicates.includes(data[i])){
                duplicates.push(data[i]);
            }
        }
    }
    return duplicates;
}